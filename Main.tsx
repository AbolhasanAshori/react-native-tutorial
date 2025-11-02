import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Result, Search, SearchProvider } from "./components";

export default function Main() {
  const insets = useSafeAreaInsets();

  return (
    <SearchProvider>
      <View
        style={[
          styles.container,
          {
            paddingTop: insets.top + 4,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        <Search placeholder="Search..." placeholderTextColor="#cac4d0" />
        <Result />
      </View>
    </SearchProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    gap: 16,
  },
});
