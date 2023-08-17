import React from "react";

import MyPhoto from "../../assets/images/myPhoto.jpg";
import { useMainStyles } from "./Main.styles";
import { mainText } from "../../lib/mock/mainText";
import Trail from "./Trail/Trail";

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
        <ImageSC src={MyPhoto} alt="Фото замечательного человека" />
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
  ImageSC,
  TitleSC,
  SubtitleSC,
} = useMainStyles();

export default React.memo(Main);
