import styled from "styled-components";

const HeaderSC = styled.header`
  background: #000;
  color: #fff;

  width: 100%;

  display: flex;
`;

const ContainerSC = styled.div`
  color: #fff;
  font-size: 55px;
`;

const TextSC = styled.h6``;

const SpanSC = styled.span`
  color: #f30085;
`;

export const useHeaderStyles = () => ({
  HeaderSC,
  SpanSC,
  TextSC,
  ContainerSC,
});
