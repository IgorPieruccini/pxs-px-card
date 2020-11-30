import { FC } from "react";
import { useCardStore } from "../hooks/useCardStore";
import { Deck } from "../utils/types";
import { CardContext } from "./CardContext";

const CardProvider: FC<Deck> = ({ resource, backfacePath, children }) => {
  const { resources, isLoading } = useCardStore({ resource, backfacePath });

  if (isLoading) return null;
  return (
    <CardContext.Provider value={resources}>{children}</CardContext.Provider>
  );
};

export default CardProvider;
