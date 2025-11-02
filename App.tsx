import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./Main";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Main />
    </SafeAreaProvider>
  );
}
