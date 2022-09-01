import styled from "styled-components";
export const Container = styled.div`
  background-color: #1c1e1f;
  width: 320px;
  header {
    background-color: #272a2c;
    padding: 1px 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: #74a3c9;
      text-decoration: none;
      text-decoration: none;
      font-size: 14px;
      font-family: Verdana, Arial;
    }
    h2 {
      color: #e8e6e3;
      font-size: 14px;
      font-family: Verdana, Arial;
    }
  }
`;
export const AnimeList = styled.div`
  margin-top: 16px;
`;
export const AnimeCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 70px;

  & + div {
    margin-top: 16px;
  }

  &:last-child {
    padding-bottom: 16px;
  }
`;

export const AnimeCardFirst = styled.div`
  width: 10%;
  height: 100%;
  color: #988f81;
  font-size: 1rem;
  font-family: Verdana, Arial;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;
export const AnimeCardSecond = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const AnimeCardThird = styled.div`
  width: 50%;
  height: 100%;
  flex-direction: column;
  display: flex;
  /* align-items: flex-start;
  justify-content: flex-end; */

  h3 {
    line-height: 1rem;
    margin: 0px;
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 0.75rem;
    font-family: Verdana, Arial;
    a {
      color: #74a3c9;
      text-decoration: none;
    }
  }
  span {
    color: #988f81;
    font-size: 0.75rem;
    font-family: Verdana, Arial;
  }
`;
export const AnimeCardForth = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;

  a {
    margin-top: 8px;
    color: #74a3c9;
    text-decoration: none;
    font-size: 14px;
    font-family: Verdana, Arial;
  }
`;
