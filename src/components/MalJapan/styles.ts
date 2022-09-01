import styled from "styled-components";

export const Container = styled.div``;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 12px;
    font-family: Verdana, Arial;
  }
  a {
    color: #74a3c9;
    text-decoration: none;
    font-size: 12px;
    font-family: Verdana, Arial;

    :hover {
      text-decoration: underline;
    }
  }
`;
export const ItensContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  align-items: center;
  justify-content: center;
  a {
    color: #74a3c9;
    text-decoration: none;
    margin-top: 8px;
  }
`;
