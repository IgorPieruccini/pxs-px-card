import React from "react";
import { Stage } from "@inlet/react-pixi";
import CardProvider from "./provider/CardProvider";
import { Card } from "./components";

const App = () => {
  return (
    <Stage>
      <CardProvider
        backfacePath={"http://localhost:3000/resources/cardBack_blue5.png"}
        resource={[
          {
            id: "card_test",
            path: "http://localhost:3000/resources/cardBack_blue3.png",
            content: {},
          },
        ]}
      >
        <Card id="card_test" />
      </CardProvider>
    </Stage>
  );
};

export default App;
