import { createContext, PropsWithChildren, useContext } from "react";

export interface DialogContextValue {
  open: boolean;
  closeDialog: () => void;
}

export const DialogContext = createContext<DialogContextValue>({
  open: false,
  closeDialog: () => {},
});

export function useDialogContext() {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error("useDialogContext must be used within a DialogProvider");
  }

  return context;
}

export interface DialogProviderProps extends PropsWithChildren {
  value: DialogContextValue;
}

export default function DialogProvider(props: DialogProviderProps) {
  const { children, value } = props;

  return <DialogContext.Provider value={value}>{children}</DialogContext.Provider>;
}
