import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { GameScreen, GameStartScreen } from "@/screens";
import { useMemo } from "react";
import { useGameContext } from "@/contexts";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants";

export default function Main() {
  const { guessedNumber } = useGameContext();

  const screen = useMemo(() => {
    let screen = <GameStartScreen />;

    if (guessedNumber) {
      screen = <GameScreen />;
    }

    return screen;
  }, [guessedNumber]);

  return (
    <LinearGradient style={styles.flex} colors={[Colors.primary[700], Colors.secondary[500]]}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.flex}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.flex}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
