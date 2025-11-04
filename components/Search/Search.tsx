import { Pressable, StyleSheet, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import SearchInput, { SearchInputProps } from "./SearchInput";
import { useState } from "react";
import SearchHistoryDialog from "./SearchHistoryDialog";
import { useSearchContext } from "./SearchProvider";

const RIPPLE_CONFIG = {
  color: "#ffffff19",
  radius: 32,
  borderless: true,
  foreground: true,
};

export interface SearchProps extends Pick<SearchInputProps, "placeholder" | "placeholderTextColor"> {}

export default function Search(props: SearchProps) {
  const { placeholder, placeholderTextColor } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { addResult, searchValue, setSearchValue } = useSearchContext();

  function handleSearchPress() {
    addResult(searchValue);
    setSearchValue("");
  }

  function handleMenuPress() {
    setIsModalVisible(true);
  }

  function handleModalClose() {
    setIsModalVisible(false);
  }

  return (
    <View style={styles.search}>
      <Pressable style={styles.iconButton} android_ripple={RIPPLE_CONFIG} onPress={handleMenuPress}>
        <MaterialIcons name="menu" size={24} color="#e6e0e9" backgroundColor="transparent" />
      </Pressable>
      <SearchInput placeholder={placeholder} placeholderTextColor={placeholderTextColor} />
      <Pressable style={styles.iconButton} android_ripple={RIPPLE_CONFIG} onPress={handleSearchPress}>
        <MaterialIcons name="search" size={30} color="#e6e0e9" backgroundColor="transparent" />
      </Pressable>
      <SearchHistoryDialog open={isModalVisible} onClose={handleModalClose} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 30,
  },
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
});
