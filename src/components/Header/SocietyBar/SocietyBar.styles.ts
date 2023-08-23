import styled from "styled-components";

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
    opacity: 0.7;

    transition: all 0.4s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

export const useSocietyBarStyles = () => ({ IconsContainer });
