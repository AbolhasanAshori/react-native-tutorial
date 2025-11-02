import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

export interface ListProps extends PropsWithChildren {}

export default function List(props: ListProps) {
  const { children } = props;

  return <View style={styles.list}>{children}</View>;
}

const styles = StyleSheet.create({
  list: {
    paddingBlock: 8,
  },
});
