import React from "react";
import { mainText } from "../../lib/mock/mainText";
import Trail from "../Main/Trail/Trail";
import { useInfoTextStyles } from "./InfoText.styles";

const InfoText = () => (
  <Trail open={true}>
    <TitleSC>
      {mainText.hello} <SpanSC>{mainText.name}</SpanSC>
    </TitleSC>
    <SubtitleSC>
      Я <FrontendTextSC>{mainText.work}</FrontendTextSC> разработчик
    </SubtitleSC>
    <DescriptionSC>{mainText.description}</DescriptionSC>
  </Trail>
);

const { DescriptionSC, FrontendTextSC, SpanSC, TitleSC, SubtitleSC } =
  useInfoTextStyles();

export default InfoText;
