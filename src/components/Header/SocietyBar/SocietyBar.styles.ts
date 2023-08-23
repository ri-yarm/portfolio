import styled from "styled-components";
import { BreakPoints } from "../../../lib/contants/enums/BreakPoints";

const IconsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-grow: 1;
  gap: 40px;

  transition: all 0.4s ease;

  svg {
    width: 35px;
    height: 35px;
    opacity: 0.7;

    transition: all 0.4s ease;

    &:hover {
      opacity: 1;
    }

    @media (max-width: ${BreakPoints.TABLET}px) {
      width: 31px;
      height: 31px;
    }
  }

  @media (max-width: ${BreakPoints.TABLET}px) {
    justify-content: end;
    gap: 25px;
  }

  @media (max-width: ${BreakPoints.BIG_PHONE}px) {
    gap: 15px;
  }
`;

export const useSocietyBarStyles = () => ({ IconsContainer });
