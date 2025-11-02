import { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from "react";

export interface SearchContextValue {
  results: string[];
  searchValue: string;
  setSearchValue: (value: string) => void;
  addResult: (value: string) => void;
  removeResult: (value: string) => void;
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

  const addResult = useCallback((value: string) => {
    setResults((prev) => [...prev, value]);
  }, []);

  const removeResult = useCallback((value: string) => {
    setResults((prevResults) => prevResults.filter((result) => result !== value));
  }, []);

  const contextValue = useMemo(
    () => ({ results, searchValue, setSearchValue, addResult, removeResult }),
    [results, searchValue, addResult, removeResult]
  );

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
}
