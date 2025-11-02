import { StyleSheet, Text, View } from "react-native";

export default function ResultList() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Under Development</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  text: {
    color: "#e6e0e9",
    fontSize: 16,
    textAlign: "center",
  },
});
