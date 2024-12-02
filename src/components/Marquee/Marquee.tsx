import React from "react";
import Marquee from "react-fast-marquee";
import { useMarqueeStyles } from "./Marquee.styles";
import NyanCat from "./NyanCatAlive/NyanCat";

const MarqueeUI = () => {
  return (
    <ContainerSC>
      <Marquee autoFill={true} speed={100} style={{ overflow: "hidden" }}>
        <TextSC>
          Frontend Developer&nbsp;<SpanSC>Frontend Developer</SpanSC>&nbsp;
        </TextSC>
      </Marquee>
      <NyanCat />
    </ContainerSC>
  );
};

const { ContainerSC, SpanSC, TextSC } = useMarqueeStyles();

export default React.memo(MarqueeUI);
