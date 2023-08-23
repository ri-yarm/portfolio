import React, { useState } from "react";
import CodeHighLight from "../CodeHighlight/CodeHighLight";
import AnimatedImage from "../AnimatedImaged/AnimatedImage";
import { useFlippedElement } from "./FlippedElement.styles";

const FlippedElement = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ContainerSC onClick={handleCardClick}>
      <WrapperSC isFlipped={isFlipped}>
        <AnimatedImage />
        <CodeHighLight />
      </WrapperSC>
    </ContainerSC>
  );
};

const { WrapperSC, ContainerSC } = useFlippedElement();

export default FlippedElement;
