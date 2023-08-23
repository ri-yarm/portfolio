import styled from "styled-components";
import { animated } from "@react-spring/web";
import { ZIndex } from "../../lib/contants/enums/ZIndex";
import { BreakPoints } from "../../lib/contants/enums/BreakPoints";

const ImageSC = styled(animated.div)`
  width: 100%;
  height: 100%;
  border-radius: 72px 0px 56px 15px;
  background-image: url("/images/myPhoto.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  z-index: ${ZIndex.DEFAULT};

  transform: rotateY(0deg);
  backface-visibility: hidden;
  position: absolute;

  overflow: hidden;

  transition: all 0.5s ease;

  @media (max-width: ${BreakPoints.TABLET}px) {
    width: 220px;
    height: 220px;

    position: relative;

    //border-radius: 50%;

    background-size: 130%;
    background-position: top center;
  }
`;

const CoolGlassesSC = styled.img<{ isHovered: boolean }>`
  width: 80px;
  height: 50px;

  left: 50%;
  transform: translate(-50%) scaleX(-1);

  top: ${({ isHovered }) => (isHovered ? "35px" : "-50px")};
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};

  position: absolute;
  z-index: ${ZIndex.ELEMENT};

  transition: all 0.5s ease;

  user-select: none;

  @media (max-width: ${BreakPoints.TABLET}px) {
    width: 50px;
    height: 30px;
    top: ${({ isHovered }) => (isHovered ? "28px" : "-50px")};
  }
`;

const SquidWardSC = styled.img<{ isHovered: boolean }>`
  width: 100px;

  bottom: ${({ isHovered }) => (isHovered ? "0px" : "-500px")};
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};

  position: absolute;
  z-index: ${ZIndex.ELEMENT};

  transition: all 0.5s ease;

  user-select: none;

  @media (max-width: ${BreakPoints.TABLET}px) {
    display: none;
  }
`;

const StichSC = styled.img<{ isHovered: boolean }>`
  width: 100px;

  right: ${({ isHovered }) => (isHovered ? "0px" : "-500px")};
  bottom: 0;
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};

  position: absolute;
  z-index: ${ZIndex.ELEMENT};

  transition: all 0.5s ease;

  user-select: none;

  @media (max-width: ${BreakPoints.TABLET}px) {
    width: 80px;
    right: ${({ isHovered }) => (isHovered ? "50%" : "-500px")};
    transform: translate(50%);
  }
`;

export const useAnimatedImageStyles = () => ({
  ImageSC,
  CoolGlassesSC,
  SquidWardSC,
  StichSC,
});
