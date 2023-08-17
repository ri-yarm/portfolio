import styled from "styled-components";

const ContainerSC = styled.div`
  background: #000;
`;

const TextSC = styled.p`
  color: #fff;
  font-family: Roboto;
  font-size: 35px;
  font-weight: 700;
  line-height: 102.688%;
  letter-spacing: -2.45px;

  text-transform: uppercase;
`;

const SpanSC = styled.span`
  color: #f30085;
`;

export const useMarqueeStyles = () => ({
  ContainerSC,
  SpanSC,
  TextSC,
});
