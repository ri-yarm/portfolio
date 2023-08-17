import React from "react";

import MyPhoto from "../../assets/images/myPhoto.jpg";
import { useMainStyles } from "./Main.styles";
import { mainText } from "../../lib/mock/mainText";

const Main = () => {
  return (
    <MainSC>
      <WrapperSC>
        <ContainerSC>
          <TitleSC>
            {mainText.hello} <SpanSC>{mainText.name}</SpanSC>
          </TitleSC>
          <TitleSC>
            Я <FrontendTextSC>{mainText.work}</FrontendTextSC> Разработчик
          </TitleSC>
          <DescriptionSC>{mainText.description}</DescriptionSC>
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
} = useMainStyles();

export default React.memo(Main);
