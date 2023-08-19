import React from "react";
import { useHeaderStyles } from "./Header.styles";
import SocietyBar from "../SocietyBar/SocietyBar";

const Header = () => {
  return (
    <HeaderSC>
      <ContainerSC>
        <TextSC>
          Р<SpanSC>Я</SpanSC>
        </TextSC>
      </ContainerSC>
      <SocietyBar />
    </HeaderSC>
  );
};

const { SpanSC, TextSC, HeaderSC, ContainerSC } = useHeaderStyles();

export default React.memo(Header);
