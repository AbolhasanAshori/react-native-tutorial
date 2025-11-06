import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { deactivateKeepAwake } from "expo-keep-awake";
import { GameProvider } from "./contexts";
import Main from "./Main";

export default function App() {
  useEffect(() => {
    void deactivateKeepAwake();
  }, []);

  return (
    <GameProvider>
      <StatusBar style="light" />
      <Main />
    </GameProvider>
  );
}
