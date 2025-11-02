import { Pressable, PressableProps, StyleSheet } from "react-native";

export interface ListItemProps extends PressableProps {}

export default function ListItem(props: ListItemProps) {
  const { children, ...other } = props;

  return (
    <Pressable style={styles.item} {...other}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    minHeight: 56,
    height: 56,
    maxHeight: 88,
    paddingInline: 16,
    paddingBlock: 8,
    flexDirection: "row",
    alignItems: "center",
  },
});
