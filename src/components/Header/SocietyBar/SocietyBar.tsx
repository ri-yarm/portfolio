import React from "react";
import { ReactComponent as GitHubIcon } from "../../../assets/GitHubIcon.svg";
import { ReactComponent as TelegramIcon } from "../../../assets/TelegramIcon.svg";
import { useSocietyBarStyles } from "./SocietyBar.styles";

const SocietyBar = () => (
  <IconsContainer>
    <li>
      <a href={"https://github.com/ri-yarm"} target="_blank" rel="noreferrer">
        <GitHubIcon />
      </a>{" "}
    </li>
    <li>
      <a href={"https://t.me/rinath52"} target="_blank" rel="noreferrer">
        <TelegramIcon />
      </a>{" "}
    </li>
  </IconsContainer>
);

const { IconsContainer } = useSocietyBarStyles();

export default SocietyBar;
