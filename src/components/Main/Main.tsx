import React from "react";

import { useMainStyles } from "./Main.styles";
import FlippedElement from "../FlippedElement/FlippedElement";
import InfoText from "../InfoText/InfoText";
import SpiderManAlive from "./SpiderManAlive/SpiderManAlive";

const Main = () => {
  return (
    <MainSC>
      <WrapperSC>
        <ContainerSC>
          <InfoText />
        </ContainerSC>
        <FlippedElement />
      </WrapperSC>
      <SpiderManAlive />
    </MainSC>
  );
};

const { MainSC, WrapperSC, ContainerSC } = useMainStyles();

export default React.memo(Main);
