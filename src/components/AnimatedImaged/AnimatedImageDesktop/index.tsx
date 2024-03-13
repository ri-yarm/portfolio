import React from "react";
import coolGlasses from "../../../assets/coolGlasses.png";
import { useAnimatedImageStyles } from "../AnimatedImage.styles";
import squidWard from "../../../assets/squidwardGifMeme.gif";
import stich from "../../../assets/steach.gif";

interface AnimatedImageDesktopProps {
  setIsHovered: (arg: boolean) => void;
  isHovered: boolean;
  scaleAnimation: never;
}

const AnimatedImageDesktop = ({
  setIsHovered,
  isHovered,
  scaleAnimation,
}: AnimatedImageDesktopProps) => {
  return (
    <ImageSC
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        willChange: "transform",
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ...scaleAnimation,
      }}>
      <CoolGlassesSC
        isHovered={isHovered}
        src={coolGlasses}
        alt={" mlg glasses."}
      />
      <SquidWardSC
        isHovered={isHovered}
        src={squidWard}
        alt={" squidward dancing."}
      />
      <StichSC isHovered={isHovered} src={stich} alt={" stich dancing."} />
    </ImageSC>
  );
};

const { ImageSC, StichSC, SquidWardSC, CoolGlassesSC } =
  useAnimatedImageStyles();

export default React.memo(AnimatedImageDesktop);
