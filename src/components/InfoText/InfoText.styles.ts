import styled from "styled-components";
import { Colors } from "../../lib/contants/enums/Colors";
import { BreakPoints } from "../../lib/contants/enums/BreakPoints";

const TitleSC = styled.h5`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 16px;

  &::selection {
    background-color: ${Colors.MAIN};
  }

  @media (max-width: ${BreakPoints.BIG_TABLET}px) {
    font-size: 25px;
  }
`;

const SubtitleSC = styled.h6`
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 8px;

  &::selection {
    background-color: ${Colors.MAIN};
  }

  @media (max-width: ${BreakPoints.BIG_TABLET}px) {
    font-size: 21px;
  }
`;

const FrontendTextSC = styled.span`
  color: ${Colors.MAIN};

  &::selection {
    background-color: ${Colors.YELLOW};
  }
`;

const DescriptionSC = styled.p`
  font-size: 18px;
  font-weight: 400;
  max-width: 800px;

  &::selection {
    background-color: ${Colors.MAIN};
  }

  @media (max-width: ${BreakPoints.BIG_TABLET}px) {
    font-size: 16px;
  }
`;

const SpanSC = styled.h1`
  color: ${Colors.MAIN};
  font-size: 40px;
  font-weight: 500;

  display: inline;
  margin: 0;

  &::selection {
    background-color: ${Colors.YELLOW};
  }

  @media (max-width: ${BreakPoints.BIG_TABLET}px) {
    font-size: 30px;
  }

  @media (max-width: ${BreakPoints.TITLE_VERSE}px) {
    display: block;
  }
`;

export const useInfoTextStyles = () => ({
  DescriptionSC,
  FrontendTextSC,
  SpanSC,
  TitleSC,
  SubtitleSC,
});
