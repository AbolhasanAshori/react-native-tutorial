import { PropsWithChildren } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

export interface CenterProps extends PropsWithChildren {
  style?: ViewStyle;
}

export default function Center(props: CenterProps) {
  const { children, style } = props;

  return <View style={[styles.center, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
