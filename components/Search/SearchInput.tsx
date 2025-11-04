import { StyleSheet, TextInput, TextInputProps, View, ViewStyle } from "react-native";
import { useSearchContext } from "./SearchProvider";

export interface SearchInputProps extends TextInputProps {
  viewStyle?: ViewStyle;
}

export default function SearchInput(props: SearchInputProps) {
  const { viewStyle, style, ...other } = props;
  const { searchValue, setSearchValue } = useSearchContext();

  return (
    <View style={[styles.view, viewStyle]}>
      <TextInput {...other} style={[styles.input, style]} value={searchValue} onChangeText={setSearchValue} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginInline: 12,
  },
  input: {
    color: "#e6e0e9",
    fontSize: 16,
  },
});
