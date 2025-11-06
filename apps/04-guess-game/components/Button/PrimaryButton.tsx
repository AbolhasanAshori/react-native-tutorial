import { PropsWithChildren } from "react";
import { Text, View, StyleSheet, Pressable, ViewStyle } from "react-native";

export interface PrimaryButtonProps extends PropsWithChildren {
  style?: ViewStyle;
}

export default function PrimaryButton(props: PrimaryButtonProps) {
  const { children, style } = props;

  function handlePress() {
    console.log("Button Pressed");
  }

  return (
    <View style={[styles.container, style]}>
      <Pressable
        style={styles.button}
        onPress={handlePress}
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
