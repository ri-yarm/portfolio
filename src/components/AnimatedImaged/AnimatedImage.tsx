import React, { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import styled from "styled-components";

const AnimatedImage = () => {
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
      style={{
        willChange: "transform",
        ...scaleAnimation,
      }}
    />
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
`;

export default React.memo(AnimatedImage);
