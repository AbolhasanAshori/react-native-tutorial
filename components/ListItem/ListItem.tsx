import { ReactNode } from "react";
import { ListRenderItemInfo, Pressable, PressableProps, StyleSheet } from "react-native";
import { useListItemContext } from "./ListItemProvider";

export interface ListItemProps<T> extends Omit<PressableProps, "children"> {
  children?: ReactNode | ((info: ListRenderItemInfo<T>) => ReactNode);
}

export default function ListItem<T>(props: ListItemProps<T>) {
  const { children, ...other } = props;

  const context = useListItemContext();

  return (
    <Pressable
      style={styles.item}
      {...other}
      android_ripple={{
        color: "#ffffff19",
        foreground: true,
      }}
    >
      {children && (typeof children === "function" ? children(context as ListRenderItemInfo<T>) : children)}
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
