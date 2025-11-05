import { StyleSheet, View, ViewProps } from "react-native";

export interface DialogContentProps extends ViewProps {}

export default function DialogContent(props: DialogContentProps) {
  const { children, style, ...other } = props;

  return (
    <View style={[styles.content, style]} {...other}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginBottom: 8,
  },
});
