import { StyleSheet, Text, View } from "react-native";
import List from "../List";
import ListItem from "../ListItem";
import { useSearchContext } from "../Search";
import { Fragment, useMemo } from "react";
import ListItemText from "../ListItemText";
import ListItemAction from "../ListItemAction";
import { MaterialIcons } from "@expo/vector-icons";

function SearchItem() {
  const { results, searchValue, addResult, setSearchValue } = useSearchContext();

  function handleAddResult() {
    addResult(searchValue);
    setSearchValue("");
  }

  if (!searchValue || results.includes(searchValue)) return null;

  return (
    <ListItem key="search-item">
      <ListItemText title={`"${searchValue}" Not Found!`} subtitle="Add it to the list?" />
      <ListItemAction onPress={handleAddResult}>
        <MaterialIcons name="add" size={24} color="#ffffff" />
      </ListItemAction>
    </ListItem>
  );
}

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
          <Fragment key={item}>
            <ListItem>
              <ListItemText title={item} />
              <ListItemAction onPress={handleDeletePress(item)}>
                <MaterialIcons name="delete" size={24} color="#B3261E" />
              </ListItemAction>
            </ListItem>
            {index !== list.length - 1 && <View style={styles.divider} />}
          </Fragment>
        ))}
      </List>
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  heading: {
    color: "#e6e0e9",
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 16,
  },
  text: {
    color: "#e6e0e9",
    fontSize: 16,
    textAlign: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "#49454F",
    marginInline: 8,
  },
});
