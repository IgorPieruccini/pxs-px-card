import React from "react";
import { CardContext } from "../provider/CardContext";

export const useCard = () => {
  const context = React.useContext(CardContext);

  if (!context) {
    throw new Error("useCard must be used within a <CardProvider />");
  }

  return context;
};
