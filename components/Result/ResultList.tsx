import { StyleSheet, Text } from "react-native";
import List from "../List";
import { useSearchContext } from "../Search";
import { useMemo } from "react";
import ResultItem from "./ResultItem";
import SearchItem from "../Search/SearchItem";

export default function ResultList() {
  const { results, removeResult, searchValue } = useSearchContext();

  function handleDeletePress(item: string) {
    return () => {
      removeResult(item);
    };
  }

  const filteredResults = useMemo(() => results.filter((item) => item.includes(searchValue)), [results, searchValue]);

  return (
    <>
      <Text style={styles.heading}>Results</Text>
      <List>
        {filteredResults.length === 0 && <SearchItem />}
        {filteredResults.map((item, index, list) => (
          <ResultItem key={item} item={item} index={index} list={list} onDeletePress={handleDeletePress} />
        ))}
      </List>
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: "#e6e0e9",
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 16,
  },
});
