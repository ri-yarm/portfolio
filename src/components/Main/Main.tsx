import React from "react";
import { useMainStyles } from "./Main.styles.ts";

import MyPhoto from "../../assets/images/myPhoto.jpg";
const Main = () => {
  return (
    <MainSC>
      <WrapperSC>
        <ContainerSC>
          <TitleSC>
            Даров! меня зовут <SpanSC>Ринат Ярмухаметов</SpanSC>
          </TitleSC>
          <TitleSC>
            Я <FrontendTextSC>{"{Front-end}"}</FrontendTextSC> Разработчик
          </TitleSC>
          <DescriptionSC>
            Опытный Front-end разработчик с опытом работы более 4 месяцев в
            создании сайтов, интерфейсов и веб-приложений. Продемонстрировал
            навыки в Javascript, React и Redux за короткий период работы.
            Стремление к постоянному совершенствованию, ориентированность на
            результат и ответственное отношение к проектной деятельности.
            Внимание к деталям, гарантирующее создание качественных, легко
            обслуживаемых и безошибочных решений.
          </DescriptionSC>
        </ContainerSC>
        {/*<ImageSC src={MyPhoto} />*/}
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
