import React from "react";
import { useFooterStyles } from "./Footer.styles";

const Footer = () => (
  <FooterSC>
    <TitleSC>made with ❤️ by rinat</TitleSC>
  </FooterSC>
);

const { FooterSC, TitleSC } = useFooterStyles();

export default Footer;
