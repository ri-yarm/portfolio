import React, { useState } from "react";
import styled from "styled-components";
import AnimatedImage from "../AnimatedImaged/AnimatedImage";
import CodeHighLight from "../CodeHighlight/CodeHighLight";

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

const ContainerSC = styled.article`
  perspective: 1000px;
  cursor: pointer;
  transition: transform 0.5s;

  width: 330px;
  height: 400px;
`;

const WrapperSC = styled.div<{ isFlipped: boolean }>`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s;

  transform: ${({ isFlipped }) => (isFlipped ? "rotateY(180deg)" : "none")};
`;
export default FlippedElement;