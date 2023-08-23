import styled from "styled-components";

const FooterSC = styled.footer`
  width: 100%;
  min-height: 60px;
  background: #000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleSC = styled.p`
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const useFooterStyles = () => ({
  FooterSC,
  TitleSC,
});
