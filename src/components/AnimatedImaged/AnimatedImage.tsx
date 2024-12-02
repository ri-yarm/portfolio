import React, { useEffect, useState } from "react";
import { useTablet } from "../../hooks/useBreakPoints";
import AnimatedImageDesktop from "./AnimatedImageDesktop";
import AnimatedImageMobile from "./AnimatedImageMobile";
import { useSpring } from "@react-spring/web";

const AnimatedImage = () => {
  const isMobile = useTablet();
  const [isHovered, setIsHovered] = useState(false);
  const [scaleState, setScaleState] = useState("initial"); // "initial", "scaling", "normal"

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setScaleState("normal");
    }, 5000);

    const interval = setInterval(() => {
      setScaleState("scaling");
      setTimeout(() => setScaleState("normal"), 300);
    }, 5000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const scaleAnimation = useSpring({
    transform:
      scaleState === "initial"
        ? "scale(1.1)"
        : scaleState === "scaling"
        ? "scale(1.2)"
        : "scale(1)",
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
