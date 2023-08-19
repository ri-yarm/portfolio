import styled from "styled-components";

const TitleSC = styled.h5`
  font-size: 37px;
  font-weight: 600;

  &::selection {
    background-color: #f30085;
  }
`;

const SubtitleSC = styled.h6`
  font-weight: 500;
  font-size: 30px;

  &::selection {
    background-color: #f30085;
  }
`;

const FrontendTextSC = styled.span`
  color: #f30085;

  &::selection {
    background-color: yellow;
  }

  &::before {
    color: blueviolet;
    font-family: "Arial", serif;
    content: "{ ";
  }
  &::after {
    color: yellow;
    font-family: "Arial", serif;
    content: " }";
  }
`;

const DescriptionSC = styled.p`
  font-size: 20px;
  font-weight: 400;
  max-width: 800px;

  &::selection {
    background-color: #f30085;
  }
`;

const SpanSC = styled.span`
  color: #f30085;
  font-size: 50px;
  font-weight: 500;

  &::selection {
    background-color: yellow;
  }
`;

export const useInfoTextStyles = () => ({
  DescriptionSC,
  FrontendTextSC,
  SpanSC,
  TitleSC,
  SubtitleSC,
});