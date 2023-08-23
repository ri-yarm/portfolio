import styled from "styled-components";
import { BreakPoints } from "../../lib/contants/enums/BreakPoints";

const HeaderSC = styled.header`
  background: #000;
  color: #fff;

  width: 100%;

  padding: 14px 28px;

  display: flex;
  //flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ContainerSC = styled.div`
  color: #fff;
  font-size: 55px;

  transition: all 0.5s ease;

  @media (max-width: ${BreakPoints.TABLET}px) {
    font-size: 50px;
  }
`;

const TextSC = styled.h6`
  user-select: none;
`;

const SpanSC = styled.span`
  color: #f30085;
`;

export const useHeaderStyles = () => ({
  HeaderSC,
  SpanSC,
  TextSC,
  ContainerSC,
});
