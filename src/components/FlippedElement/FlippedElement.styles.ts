import styled from "styled-components";
import { BreakPoints } from "../../lib/contants/enums/BreakPoints";

const ContainerSC = styled.article`
  perspective: 1000px;
  cursor: pointer;
  transition: transform 0.5s ease;

  width: 330px;
  height: 400px;

  user-select: none;

  @media (max-width: ${BreakPoints.TABLET}px) {
    width: 220px;
    height: 220px;
  }
`;

const WrapperSC = styled.div<{ isFlipped: boolean }>`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;

  transform: ${({ isFlipped }) => (isFlipped ? "rotateY(180deg)" : "none")};

  @media (max-width: ${BreakPoints.NOTEBOOK}px) {
    transform: none;
  }
`;

export const useFlippedElement = () => ({ ContainerSC, WrapperSC });
