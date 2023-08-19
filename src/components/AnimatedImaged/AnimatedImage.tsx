import React, { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import coolGlasses from "../../assets/coolGlasses.png";
import squidWard from "../../assets/squidwardGifMeme.gif";
import styled from "styled-components";
import { ZIndex } from "../../lib/contants/enums/ZIndex";

const AnimatedImage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartAnimation(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const scaleAnimation = useSpring({
    transform: startAnimation ? "scale(1)" : "scale(1.1)",
    config: { tension: 120, friction: 20 },
  });

  return (
    <ImageSC
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        willChange: "transform",
        ...scaleAnimation,
      }}>
      <CoolGlassesSC isHovered={isHovered} src={coolGlasses} />
      <SquidWardSC isHovered={isHovered} src={squidWard} />
    </ImageSC>
  );
};

const ImageSC = styled(animated.div)`
  width: 330px;
  height: 400px;
  border-radius: 72px 0px 56px 15px;
  background-image: url("images/myPhoto.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
  z-index: ${ZIndex.DEFAULT};
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
`;

const SquidWardSC = styled.img<{ isHovered: boolean }>`
  width: 100px;

  bottom: ${({ isHovered }) => (isHovered ? "0px" : "-500px")};
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};

  position: absolute;
  z-index: ${ZIndex.ELEMENT};

  transition: all 0.5s ease;

  user-select: none;
`;

export default React.memo(AnimatedImage);
