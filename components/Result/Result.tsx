import { StyleSheet, View } from "react-native";
import ResultOverlay from "./ResultOverlay";
import ResultList from "./ResultList";
import { useSearchContext } from "../Search";

export default function Result() {
  const { results, searchValue } = useSearchContext();

  const noResult = results.length === 0 && searchValue === "";

  return <View style={styles.view}>{noResult ? <ResultOverlay /> : <ResultList />}</View>;
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
