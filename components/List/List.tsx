import { Children, isValidElement, PropsWithChildren, ReactElement, useMemo } from "react";
import { FlatList, StyleSheet } from "react-native";
import { ListItemProvider } from "../ListItem";

export interface ListProps extends PropsWithChildren {}

export default function List(props: ListProps) {
  const { children } = props;

  const elements = useMemo(
    () => Children.toArray(children).filter<ReactElement>((child) => isValidElement(child)),
    [children]
  );

  return (
    <FlatList
      style={styles.list}
      data={elements}
      renderItem={(info) => <ListItemProvider {...info}>{info.item}</ListItemProvider>}
      keyExtractor={(item, index) => item.key || index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingBlock: 8,
  },
});
