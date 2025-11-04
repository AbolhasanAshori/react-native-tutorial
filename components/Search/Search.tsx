import { Pressable, StyleSheet, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import SearchInput, { SearchInputProps } from "./SearchInput";

export interface SearchProps extends Pick<SearchInputProps, "placeholder" | "placeholderTextColor"> {}

export default function Search(props: SearchProps) {
  const { placeholder, placeholderTextColor } = props;

  function handleSearchPress() {
    console.log("Search");
  }

  return (
    <View style={styles.search}>
      <MaterialIcons.Button
        style={styles.iconButton}
        iconStyle={styles.startIcon}
        name="menu"
        size={24}
        color="white"
        backgroundColor="transparent"
      />
      <SearchInput placeholder={placeholder} placeholderTextColor={placeholderTextColor} />
      <Pressable
        android_ripple={{ color: "#ffffff19", radius: 32, borderless: true, foreground: true }}
        onPress={handleSearchPress}
      >
        <MaterialIcons
          style={styles.iconButton}
          iconStyle={styles.endIcon}
          name="search"
          size={30}
          color="white"
          backgroundColor="transparent"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
    overflow: "hidden",
    minHeight: 56,
    backgroundColor: "#2b2930",
    paddingHorizontal: 16,
  },
  iconButton: {
    padding: 0,
  },
  startIcon: {
    marginRight: 12,
  },
  endIcon: {
    marginLeft: 12,
    marginRight: 0,
  },
});
