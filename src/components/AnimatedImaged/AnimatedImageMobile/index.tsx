import React, { useEffect, useState } from "react";
import { useSpring } from "@react-spring/web";
import coolGlasses from "../../../assets/coolGlasses.png";
import { useAnimatedImageStyles } from "../AnimatedImage.styles";
import stich from "../../../assets/steach.gif";

const AnimatedImageMobile = () => {
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
      onClick={() => setIsHovered(!isHovered)}
      style={{
        willChange: "transform",
        ...scaleAnimation,
      }}>
      <CoolGlassesSC
        isHovered={isHovered}
        src={coolGlasses}
        alt={" mlg glasses."}
      />
      <StichSC isHovered={isHovered} src={stich} alt={" stich dancing."} />
    </ImageSC>
  );
};

const { ImageSC, StichSC, CoolGlassesSC } = useAnimatedImageStyles();

export default React.memo(AnimatedImageMobile);
