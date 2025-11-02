import { createContext, PropsWithChildren, useContext, useMemo, useState } from "react";

export interface SearchContextValue {
  results: string[];
  searchValue: string;
  setSearchValue: (value: string) => void;
  addResult: (value: string) => void;
}

export const SearchContext = createContext<SearchContextValue | null>(null);

export function useSearchContext() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }

  return context;
}

export interface SearchProviderProps extends PropsWithChildren {}

export default function SearchProvider(props: SearchProviderProps) {
  const { children } = props;
  const [results, setResults] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  function addResult(value: string) {
    setResults((prev) => [...prev, value]);
  }

  const contextValue = useMemo(() => ({ results, searchValue, setSearchValue, addResult }), [results, searchValue]);

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
}
