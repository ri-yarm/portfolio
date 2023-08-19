import React from "react";

import { useMainStyles } from "./Main.styles";
import FlippedElement from "../FlippedElement/FlippedElement";
import InfoText from "../InfoText/InfoText";

const Main = () => {
  return (
    <MainSC>
      <WrapperSC>
        <ContainerSC>
          <InfoText />
        </ContainerSC>
        <FlippedElement />
      </WrapperSC>
    </MainSC>
  );
};

const { MainSC, WrapperSC, ContainerSC } = useMainStyles();

export default React.memo(Main);
