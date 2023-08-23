import styled from "styled-components";
import { Colors } from "../../lib/contants/enums/Colors";

const TitleSC = styled.h5`
  font-size: 28px;
  font-weight: 500;

  &::selection {
    background-color: ${Colors.MAIN};
  }
`;

const SubtitleSC = styled.h6`
  font-weight: 500;
  font-size: 25px;

  &::selection {
    background-color: ${Colors.MAIN};
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
`;

export const useInfoTextStyles = () => ({
  DescriptionSC,
  FrontendTextSC,
  SpanSC,
  TitleSC,
  SubtitleSC,
});
