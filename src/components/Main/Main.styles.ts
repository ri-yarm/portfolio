import styled from "styled-components";

const MainSC = styled.main`
  background: #000;
  color: #fff;

  width: 100%;

  padding: 0 28px;

  display: flex;
  flex-grow: 1;
`;

const WrapperSC = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
`;

const ContainerSC = styled.div``;

const TitleSC = styled.h5`
  font-size: 37px;
  font-weight: 600;
`;

const SubtitleSC = styled.h6`
  font-weight: 500;
  font-size: 30px;
`;

const FrontendTextSC = styled.span`
  background: #f30085;
  background-image: linear-gradient(to right, #ec13ff, #14d5ef);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;

  &::before {
    font-family: "Arial", serif;
    content: "{ ";
  }
  &::after {
    font-family: "Arial", serif;
    content: " }";
  }
`;

const DescriptionSC = styled.p`
  font-size: 20px;
  font-weight: 400;
  max-width: 800px;
`;

const ImageSC = styled.img`
  width: 300px;
  height: 400px;
  object-fit: contain;
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
  SubtitleSC,
});
