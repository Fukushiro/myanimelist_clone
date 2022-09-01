import styled from "styled-components";
import { maxMedium, maxSmall } from "../utils/screensize";
import * as TopListStyles from "../components/ListTop/styles";

export const Container = styled.div`
  width: 1060px;
  /* background-color: green; */
  @media (max-width: ${maxMedium}px) {
    /* background-color: red; */
    /* width: 640px; */
  }
  @media (max-width: ${maxSmall}px) {
    /* background-color: blue; */
  }
`;

export const ImageContainer = styled.div`
  height: 228px;
  width: 100%;
  position: relative;
  margin-top: 8px;
`;

export const ContentContainer = styled.div`
  display: flex;
`;

export const ContentContainerLeft = styled.div`
  width: 65%;
  background-color: #181a1b;
`;
export const ContentContainerLeftContent = styled.div`
  border-right: 1px solid #373c3e;
  padding-right: 8px;
  margin-top: 15px;
  margin-left: 10px;
`;
export const ContentContainerRight = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  background-color: #181a1b;

  ${TopListStyles.Container}:nth-child(1) {
    margin-top: 16px;
  }
`;
