import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  display: flex;
  /* width: 900px; */
  width: 100%;
  button {
    margin-left: 10px;
  }

  div {
    position: absolute;
    right: 0;
  }
`;

export const Logo = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
`;

export const HideAdsButton = styled.button`
  background-color: #9b4305;
  border: 1px solid #9b4305;
  color: white;
  width: 130px;
  height: 24px;
  font-size: 1rem;
  transition: filter 0.5s;
  cursor: pointer;
  :hover {
    filter: brightness(0.9);
  }
`;
