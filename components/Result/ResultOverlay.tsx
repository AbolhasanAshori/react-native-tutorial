import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function ResultOverlay() {
  return (
    <View style={styles.view}>
      <MaterialIcons name="sentiment-neutral" size={120} color="white" />
      <Text style={styles.primaryText}>No Data</Text>
      <Text style={styles.secondaryText}>Try Searching Something!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  primaryText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  secondaryText: {
    color: "white",
    fontSize: 16,
  },
});
