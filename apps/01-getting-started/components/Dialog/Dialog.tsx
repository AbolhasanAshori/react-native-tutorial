import { Modal, ModalProps, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DialogProvider from "./DialogProvider";

export interface DialogProps extends ModalProps {
  open: boolean;
  onClose: () => void;
}

export default function Dialog(props: DialogProps) {
  const { children, onClose, open, ...other } = props;
  const insets = useSafeAreaInsets();

  return (
    <DialogProvider value={{ open, closeDialog: onClose }}>
      <Modal
        visible={open}
        onRequestClose={onClose}
        animationType="slide"
        statusBarTranslucent
        hardwareAccelerated
        transparent
        {...other}
      >
        <View
          style={[
            styles.modalContent,
            {
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
              paddingRight: insets.right + 8,
              paddingLeft: insets.left + 8,
            },
          ]}
        >
          {children}
        </View>
      </Modal>
    </DialogProvider>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "#1b1a1b",
    flex: 1,
  },
});
