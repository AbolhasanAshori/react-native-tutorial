import { createContext, useContext, useMemo, useState } from "react";
import type { PropsWithChildren } from "react";

export interface GameContextValue {
  guessedNumber: number | undefined;
  setGuessedNumber: (number: number) => void;
}

export const GameContext = createContext<GameContextValue | null>(null);

export function useGameContext() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }

  return context;
}

export interface GameProviderProps extends PropsWithChildren {}

export default function GameProvider(props: GameProviderProps) {
  const { children } = props;
  const [guessedNumber, setGuessedNumber] = useState<number>();

  const contextValue = useMemo(() => ({ guessedNumber, setGuessedNumber }), [guessedNumber]);

  return <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>;
}
