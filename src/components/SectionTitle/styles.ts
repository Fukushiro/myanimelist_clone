import styled from "styled-components";
import { flavor } from "../../flavor";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  /* line-height: 0.1rem; */
  padding: 0;
  margin-bottom: 8px;
  h2 {
    padding: 0px;
    margin: 0px;
  }
`;

export const Title = styled.h2`
  a {
    color: white;
    text-decoration: none;
    font-size: 0.75rem;
    font-family: Verdana, Arial;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const Link = styled.h2`
  a {
    color: ${flavor.colors.linkColor};
    text-decoration: none;
    font-size: 0.6875rem;
    font-family: Verdana, Arial;

    :hover {
      text-decoration: underline;
    }
  }
`;
