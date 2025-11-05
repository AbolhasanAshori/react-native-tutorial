import { StyleSheet, Text, View } from "react-native";

export interface ListItemTextProps {
  title: string;
  subtitle?: string;
}

export default function ListItemText(props: ListItemTextProps) {
  const { title, subtitle } = props;

  return (
    <View style={styles.view}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    color: "#e6e0e9",
    fontSize: 16,
    lineHeight: 24,
  },
  subtitle: {
    color: "#cac4d0",
    fontSize: 14,
    lineHeight: 20,
  },
});
