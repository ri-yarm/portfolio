import React from "react";
import coolGlasses from "../../../assets/coolGlasses.png";
import { useAnimatedImageStyles } from "../AnimatedImage.styles";
import stich from "../../../assets/steach.gif";

interface AnimatedImageMobileProps {
  isClicked: boolean;
  scaleAnimation: any;
  setIsHovered: (arg: boolean) => void;
}

const AnimatedImageMobile = ({
  isClicked,
  scaleAnimation,
  setIsHovered,
}: AnimatedImageMobileProps) => (
  <ImageSC
    onClick={() => setIsHovered(!isClicked)}
    style={{
      willChange: "transform",
      ...scaleAnimation,
    }}>
    <CoolGlassesSC
      isHovered={isClicked}
      src={coolGlasses}
      alt={" mlg glasses."}
    />
    <StichSC isHovered={isClicked} src={stich} alt={" stich dancing."} />
  </ImageSC>
);

const { ImageSC, StichSC, CoolGlassesSC } = useAnimatedImageStyles();

export default React.memo(AnimatedImageMobile);
