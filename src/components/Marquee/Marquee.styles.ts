import styled from "styled-components";
import { BreakPoints } from "../../lib/contants/enums/BreakPoints";

const ContainerSC = styled.div`
  background: #000;

  position: relative;
`;

const TextSC = styled.p`
  color: #fff;
  font-family: Roboto;
  font-size: 35px;
  font-weight: 700;
  line-height: 102.688%;
  letter-spacing: -1px;

  text-transform: uppercase;

  &::selection {
    background-color: #f30085;
  }

  @media (max-width: ${BreakPoints.NOTEBOOK}px) {
    font-size: 31px;
  }

  @media (max-width: ${BreakPoints.BIG_TABLET}px) {
    font-size: 28px;
  }

  @media (max-width: ${BreakPoints.BIG_PHONE}px) {
    font-size: 23px;
  }
`;

const SpanSC = styled.span`
  color: #f30085;

  &::selection {
    background-color: #fff;
  }
`;

export const useMarqueeStyles = () => ({
  ContainerSC,
  SpanSC,
  TextSC,
});
