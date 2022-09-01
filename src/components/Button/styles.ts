import styled from "styled-components";

export const ButtonStyle = styled.button<{ inverted?: boolean }>`
  background-color: ${(props) => {
    if (props.inverted) {
      return "#131516";
    }

    return "#254182";
  }};
  color: ${(props) => {
    if (props.inverted) {
      return "#68ace6";
    }

    return "white";
  }};
  font-weight: bold;
  border: 1px solid
    ${(props) => {
      if (props.inverted) {
        return "#254182";
      }
      return "#29478c";
    }};
  width: 94px;
  height: 26px;
  font-size: 0.875rem;
  transition: filter 0.5s;
  cursor: pointer;
  :hover {
    filter: brightness(0.9);
  }
`;
