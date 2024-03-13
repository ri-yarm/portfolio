import React, { useEffect, useState } from "react";
import { useTablet } from "../../hooks/useBreakPoints";
import AnimatedImageDesktop from "./AnimatedImageDesktop";
import AnimatedImageMobile from "./AnimatedImageMobile";
import { useSpring } from "@react-spring/web";

const AnimatedImage = () => {
  const isMobile = useTablet();

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
    <>
      {!isMobile && (
        <AnimatedImageDesktop
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          // @ts-ignore
          scaleAnimation={scaleAnimation}
        />
      )}
      {isMobile && (
        <AnimatedImageMobile
          isClicked={isHovered}
          setIsHovered={setIsHovered}
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          // @ts-ignore
          scaleAnimation={scaleAnimation}
        />
      )}
    </>
  );
};

export default React.memo(AnimatedImage);
