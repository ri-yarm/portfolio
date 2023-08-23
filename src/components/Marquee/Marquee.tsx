import React from "react";
import Marquee from "react-fast-marquee";
import { useMarqueeStyles } from "./Marquee.styles";
import NyanCat from "./NyanCatAlive/NyanCat";

const MarqueeUI = () => {
  return (
    <ContainerSC>
      <Marquee autoFill={true} speed={100} style={{ overflow: "hidden" }}>
        <TextSC>
          РАЗРАБОТЧИК ЭТО&nbsp;<SpanSC>Я РАЗРАБОТЧИК</SpanSC>&nbsp;ЭТО Я
          РАЗРАБОТЧИК&nbsp;<SpanSC>ЭТО Я</SpanSC>
          &nbsp;
        </TextSC>
      </Marquee>
      <NyanCat />
    </ContainerSC>
  );
};

const { ContainerSC, SpanSC, TextSC } = useMarqueeStyles();

export default React.memo(MarqueeUI);
