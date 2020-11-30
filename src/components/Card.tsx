import { Container, Sprite } from "@inlet/react-pixi";
import React, { useState } from "react";
import { useCard } from "../hooks";
import { BACKFACE, FACES } from "../utils";

type Props = { id: string };

const animationConfig = {
  foldIn: {
    from: { x: 1, y: 1 },
    to: { x: 0, y: 0 },
    event: () => {
      console.log("foldIn Done");
    },
  },
  foldOut: {
    from: { x: 0, y: 0 },
    to: { x: 1, y: 1 },
    event: () => {
      console.log("fold Out Done");
    },
  },
};

export const Card = ({ id }: Props) => {
  const [face, setFace] = useState<FACES>(FACES.FRONT);
  const resources = useCard();
  const { start, attributes } = useAnimation(animationConfig);

  if (!resources) return null;

  const onContainer = () => {
    start();
    setFace((prev) => (prev === FACES.FRONT ? FACES.BACK : FACES.FRONT));
  };

  return (
    <Container
      interactive
      click={onContainer}
      scale={[attributes.x, attributes.y]}
      position={[100, 100]}
    >
      {face === FACES.FRONT && <Sprite texture={resources[id]?.texture} />}
      {face === FACES.BACK && <Sprite texture={resources[BACKFACE]?.texture} />}
    </Container>
  );
};
