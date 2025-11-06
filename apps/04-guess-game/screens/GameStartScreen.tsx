import { StyleSheet, Text, TextInput, View } from "react-native";
import { PrimaryButton } from "../components";
import { LinearGradient } from "expo-linear-gradient";

export default function GameStartScreen() {
  return (
    <LinearGradient style={styles.container} colors={["#72063c", "#ddb52f"]}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.title}>Guess a Number</Text>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={2}
              autoCorrect={false}
              autoCapitalize="none"
            />
            <View style={styles.buttonsContainer}>
              <PrimaryButton style={styles.button}>Confirm</PrimaryButton>
              <PrimaryButton style={styles.button}>Reset</PrimaryButton>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}></View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    maxWidth: 300,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
    backgroundColor: "#640233",
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: 50,
    fontSize: 32,
    borderColor: "#ddb52f",
    color: "#ddb52f",
    borderBottomWidth: 1,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  button: {
    flex: 1,
  },
  topContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 3,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
