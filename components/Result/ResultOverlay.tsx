import { MaterialIcons } from "@expo/vector-icons";
import { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";

interface ResultOverlay {
  (): ReactElement;
  NoResults: () => ReactElement;
}

const ResultOverlay: ResultOverlay = () => {
  return (
    <View style={styles.view}>
      <MaterialIcons name="search" size={120} color="white" />
      <Text style={styles.secondaryText}>Try Searching Something!</Text>
    </View>
  );
};

ResultOverlay.NoResults = () => {
  return (
    <View style={styles.view}>
      <MaterialIcons name="sentiment-neutral" size={120} color="white" />
      <Text style={styles.secondaryText}>No Results Found</Text>
    </View>
  );
};

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

export default ResultOverlay;
