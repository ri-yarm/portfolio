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

  max-width: 1800px;
`;

const ContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const useMainStyles = () => ({
  MainSC,
  ContainerSC,
  WrapperSC,
});
