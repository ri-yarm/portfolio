import styled from "styled-components";

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
`;

const TextSC = styled.h6`
  user-select: none;
`;

const SpanSC = styled.span`
  color: #f30085;
`;

const IconsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-grow: 1;
  gap: 40px;

  svg {
    width: 35px;
    height: 35px;
  }
`;

export const useHeaderStyles = () => ({
  HeaderSC,
  SpanSC,
  TextSC,
  ContainerSC,
  IconsContainer,
});
