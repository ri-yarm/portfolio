import React from "react";
import { useTablet } from "../../hooks/useBreakPoints";
import AnimatedImageDesktop from "./AnimatedImageDesktop";
import AnimatedImageMobile from "./AnimatedImageMobile";

const AnimatedImage = () => {
  const isMobile = useTablet();

  return (
    <>
      {!isMobile && <AnimatedImageDesktop />}
      {isMobile && <AnimatedImageMobile />}
    </>
  );
};

export default React.memo(AnimatedImage);
