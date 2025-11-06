import { StatusBar } from "expo-status-bar";
import { GameStartScreen } from "./screens";
import { useEffect } from "react";
import { deactivateKeepAwake, useKeepAwake } from "expo-keep-awake";

export default function App() {
  useEffect(() => {
    void deactivateKeepAwake();
  }, []);

  return (
    <>
      <GameStartScreen />
      <StatusBar style="light" />
    </>
  );
}
