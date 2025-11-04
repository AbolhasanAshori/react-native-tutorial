import { Pressable, PressableProps, StyleSheet } from "react-native";

function isFunction(value: any): value is Function {
  return typeof value === "function";
}

export interface ListItemActionProps extends PressableProps {}

export default function ListItemAction(props: ListItemActionProps) {
  const { children, style, ...other } = props;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.action,
        !isFunction(style) && style,
        pressed && styles.pressed,
        isFunction(style) && style({ pressed }),
      ]}
      android_ripple={{ color: "#ffffff19", radius: 24, foreground: true, borderless: true }}
      {...other}
    >
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
  pressed: {
    backgroundColor: "#ffffff19",
  },
});
