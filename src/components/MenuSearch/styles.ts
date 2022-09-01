import styled from "styled-components";
const barHeight = 40;
export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  background-color: #254182;
  /* height: 50px; */
  position: relative;
`;

export const ListOfCategories = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  height: ${barHeight}px;
  background-color: #254182;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
`;
export const ListOfCategoriesItens = styled.li`
  /* padding: 10px 18px; */
  /* height: 100%; */
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  justify-content: center;
  position: relative;
  :hover {
    background-color: #232628;
    ul {
      display: block;
      background-color: #232628;
    }
  }
`;

export const ListOfOptions = styled.ul`
  position: absolute;
  list-style: none;
  z-index: 999;
  /* background-color: red; */
  background-color: #254182;
  padding-left: 0;
  left: 0;

  top: ${barHeight}px;
  display: none;
  width: 150px;
`;
export const ListOfOptionsItens = styled.li`
  padding-left: 15px;
  padding-bottom: 10px;
  padding-top: 10px;

  :hover {
    background-color: #254182;
  }
`;

export const RightContainer = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  height: 100%;

  input {
    background-color: #3b3b3b;
    border: none;
    width: 240px;
    height: 25px;
    margin-left: 10px;
    /* padding: 5px 15px; */
    padding-left: 15px;
    color: white;
  }
`;

export const ClickableIcon = styled.div`
  background-color: #232628;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 30px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  margin-right: 20px;
`;
