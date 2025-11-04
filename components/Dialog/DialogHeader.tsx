import { MaterialIcons } from "@expo/vector-icons";
import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDialogContext } from "./DialogProvider";

const DEFAULT_ICON = <MaterialIcons name="close" size={24} color="#e6e0e9" />;

export interface DialogHeaderProps {
  title: string;
  icon?: ReactNode;
  disableIcon?: boolean;
  action?: ReactNode;
}

export default function DialogHeader(props: DialogHeaderProps) {
  const { icon, title, disableIcon, action } = props;
  const { closeDialog } = useDialogContext();

  const iconContent = icon || DEFAULT_ICON;

  return (
    <View style={styles.header}>
      {!disableIcon && (
        <Pressable
          style={styles.icon}
          android_ripple={{ color: "#ffffff19", radius: 24, borderless: true, foreground: true }}
          onPress={closeDialog}
        >
          {iconContent}
        </Pressable>
      )}
      <Text style={styles.title}>{title}</Text>
      {action}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    minHeight: 56,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
  },
  title: {
    lineHeight: 32,
    fontSize: 24,
    color: "#e6e0e9",
    flex: 1,
    textAlign: "left",
    marginLeft: 8,
  },
});
