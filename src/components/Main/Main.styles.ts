import styled from "styled-components";
import { BreakPoints } from "../../lib/contants/enums/BreakPoints";

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
  gap: 50px;
  flex-grow: 1;

  max-width: 1800px;

  @media (max-width: ${BreakPoints.TABLET}px) {
    justify-content: center;
    flex-direction: column-reverse;
  }
`;

const ContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${BreakPoints.TABLET}px) {
    text-align: center;
  }
`;

export const useMainStyles = () => ({
  MainSC,
  ContainerSC,
  WrapperSC,
});
