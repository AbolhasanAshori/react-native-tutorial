import { PropsWithChildren } from "react";
import { Text, View, StyleSheet, Pressable, ViewStyle, PressableProps } from "react-native";

export interface PrimaryButtonProps extends PropsWithChildren {
  style?: ViewStyle;
  onPress?: PressableProps["onPress"];
}

export default function PrimaryButton(props: PrimaryButtonProps) {
  const { children, style, onPress } = props;

  return (
    <View style={[styles.container, style]}>
      <Pressable
        style={styles.button}
        onPress={onPress}
        android_ripple={{
          color: "#640233",
          foreground: true,
        }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  button: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
