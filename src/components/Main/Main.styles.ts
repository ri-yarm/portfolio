import styled from "styled-components";

const MainSC = styled.main`
  background: #000;
  color: #fff;

  width: 100%;
  //height: 100%;

  padding: 0 28px;

  display: flex;
  flex-grow: 1;

  //display: flex;
  //justify-content: center;
  //align-items: center;
  //flex-direction: column;
`;

const WrapperSC = styled.div`
  //height: 100%;

  display: flex;
  //justify-content: center;
  align-items: center;
  //flex-direction: column;

  justify-content: center;
  //align-items: center;
  flex-grow: 1;
`;

const ContainerSC = styled.div``;

const TitleSC = styled.h6`
  font-size: 37px;
  font-weight: 700;
`;

const FrontendTextSC = styled.span`
  background: #f30085;
  background-image: linear-gradient(to right, #ec13ff, #14d5ef);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
`;

const DescriptionSC = styled.p`
  font-size: 18px;
  font-weight: 400;
  max-width: 1060px;
`;

const ImageSC = styled.img`
  width: 300px;
  height: 400px;
`;

const SpanSC = styled.span`
  color: #f30085;
  font-size: 50px;
  font-weight: 500;
`;

export const useMainStyles = () => ({
  MainSC,
  ContainerSC,
  DescriptionSC,
  ImageSC,
  WrapperSC,
  SpanSC,
  TitleSC,
  FrontendTextSC,
});
