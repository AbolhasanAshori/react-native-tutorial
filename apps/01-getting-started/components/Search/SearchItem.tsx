import { MaterialIcons } from "@expo/vector-icons";
import ListItem from "../ListItem";
import ListItemAction from "../ListItemAction";
import ListItemText from "../ListItemText";
import { useSearchContext } from "../Search/SearchProvider";

export default function SearchItem() {
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
