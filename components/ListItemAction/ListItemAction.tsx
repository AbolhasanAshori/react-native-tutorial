import { Pressable, PressableProps, StyleSheet } from "react-native";

export interface ListItemActionProps extends PressableProps {}

export default function ListItemAction(props: ListItemActionProps) {
  const { children, ...other } = props;

  return (
    <Pressable style={styles.action} {...other}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  action: {
    marginInlineStart: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
