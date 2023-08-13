import styled from "styled-components";

const MainSC = styled.main`
  background: #000;
  color: #fff;

  width: 100%;
  height: 100%;

  padding: 28px;

  //display: flex;
  //justify-content: center;
  //align-items: center;
  //flex-direction: column;
`;

const WrapperSC = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

const ContainerSC = styled.div`
  display: flex;
  //justify-content: center;
  //align-items: center;
  flex-direction: column;

  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`;

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

const SpanSC = styled.span`
  color: #f30085;
  font-size: 50px;
  font-weight: 500;
`;

export const useAppStyles = () => ({
  MainSC,
  ContainerSC,
  WrapperSC,
  SpanSC,
  TitleSC,
  FrontendTextSC,
});
