import React from "react";

import { useMainStyles } from "./Main.styles";
import { mainText } from "../../lib/mock/mainText";
import Trail from "./Trail/Trail";
import AnimatedImage from "../AnimatedImaged/AnimatedImage";

const Main = () => {
  return (
    <MainSC>
      <WrapperSC>
        <ContainerSC>
          <Trail open={true}>
            <TitleSC>
              {mainText.hello} <SpanSC>{mainText.name}</SpanSC>
            </TitleSC>
            <SubtitleSC>
              Я <FrontendTextSC>{mainText.work}</FrontendTextSC> Разработчик
            </SubtitleSC>
            <DescriptionSC>{mainText.description}</DescriptionSC>
          </Trail>
        </ContainerSC>
        <AnimatedImage />
      </WrapperSC>
    </MainSC>
  );
};

const {
  MainSC,
  DescriptionSC,
  WrapperSC,
  FrontendTextSC,
  ContainerSC,
  SpanSC,
  TitleSC,
  SubtitleSC,
} = useMainStyles();

export default React.memo(Main);
