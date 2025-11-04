import { Fragment } from "react";
import ListItem from "../ListItem";
import ListItemText from "../ListItemText";
import ListItemAction from "../ListItemAction";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

export interface ResultItemProps {
  item: string;
  index: number;
  list: string[];
  onDeletePress: (item: string) => () => void;
}

export default function ResultItem(props: ResultItemProps) {
  const { item, index, list, onDeletePress } = props;

  return (
    <Fragment key={item}>
      <ListItem>
        <ListItemText title={item} />
        <ListItemAction onPress={onDeletePress(item)}>
          <MaterialIcons name="delete" size={24} color="#B3261E" />
        </ListItemAction>
      </ListItem>
      {index !== list.length - 1 && <View style={styles.divider} />}
    </Fragment>
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: "#49454F",
    marginInline: 8,
  },
});
