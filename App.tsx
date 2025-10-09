import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.tsx to start working on your app!
      </Text>
      <Text style={[styles.text, styles.alternativeText]}>
        This is a another text.
      </Text>
      <Button title="Click Me!" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  text: {
    color: "#fff",
  } as TextStyle,
  alternativeText: {
    margin: 16,
  } as TextStyle,
});
