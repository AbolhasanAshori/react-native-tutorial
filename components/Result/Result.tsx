import { StyleSheet, View } from "react-native";
import ResultOverlay from "./ResultOverlay";
import ResultList from "./ResultList";
import { useSearchContext } from "../Search";

export default function Result() {
  const { searchValue } = useSearchContext();

  const emptySearch = searchValue === "";

  return <View style={styles.view}>{emptySearch ? <ResultOverlay /> : <ResultList />}</View>;
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
