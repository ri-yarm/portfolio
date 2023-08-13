import React from "react";
import { useHeaderStyles } from "./Header.styles.ts";

const Header = () => {
  return (
    <HeaderSC>
      <ContainerSC>
        <TextSC>
          Р<SpanSC>Я</SpanSC>
        </TextSC>
      </ContainerSC>
    </HeaderSC>
  );
};

const { SpanSC, TextSC, HeaderSC, ContainerSC } = useHeaderStyles();

export default React.memo(Header);
