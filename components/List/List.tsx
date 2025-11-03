import { PropsWithChildren } from "react";
import { ScrollView, StyleSheet } from "react-native";

export interface ListProps extends PropsWithChildren {}

export default function List(props: ListProps) {
  const { children } = props;

  return <ScrollView style={styles.list}>{children}</ScrollView>;
}

const styles = StyleSheet.create({
  list: {
    paddingBlock: 8,
  },
});
