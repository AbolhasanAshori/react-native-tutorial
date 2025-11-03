import { createContext, PropsWithChildren, useContext } from "react";
import { ListRenderItemInfo } from "react-native";

export interface ListItemContextValue<T = unknown> extends ListRenderItemInfo<T> {}

export const ListItemContext = createContext<ListItemContextValue | null>(null);

export function useListItemContext() {
  const context = useContext(ListItemContext);

  if (!context) {
    throw new Error("useListItemContext must be used within a ListItemProvider");
  }

  return context;
}

export interface ListItemProviderProps<T> extends PropsWithChildren, ListRenderItemInfo<T> {}

export default function ListItemProvider<T>(props: ListItemProviderProps<T>) {
  const { children, ...other } = props;

  return <ListItemContext.Provider value={other}>{children}</ListItemContext.Provider>;
}
