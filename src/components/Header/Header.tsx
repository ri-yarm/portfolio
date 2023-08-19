import React from "react";
import { useHeaderStyles } from "./Header.styles";
import { ReactComponent as GitHubIcon } from "../../assets/GitHubIcon.svg";
import { ReactComponent as TelegramIcon } from "../../assets/TelegramIcon.svg";

const Header = () => {
  return (
    <HeaderSC>
      <ContainerSC>
        <TextSC>
          Р<SpanSC>Я</SpanSC>
        </TextSC>
      </ContainerSC>
      <IconsContainer>
        <li>
          <a
            href={"https://github.com/ri-yarm"}
            target="_blank"
            rel="noreferrer">
            <GitHubIcon />
          </a>{" "}
        </li>
        <li>
          <a href={"https://t.me/ri_yarm"} target="_blank" rel="noreferrer">
            <TelegramIcon />
          </a>{" "}
        </li>
      </IconsContainer>
    </HeaderSC>
  );
};

const { SpanSC, IconsContainer, TextSC, HeaderSC, ContainerSC } =
  useHeaderStyles();

export default React.memo(Header);
