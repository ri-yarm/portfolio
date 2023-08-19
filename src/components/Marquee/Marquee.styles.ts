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

  &::selection {
    background-color: #f30085;
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
