import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { GameScreen, GameStartScreen } from "./screens";
import { useMemo } from "react";
import { useGameContext } from "./contexts";

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
    <LinearGradient style={styles.flex} colors={["#72063c", "#ddb52f"]}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.flex}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        {screen}
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
