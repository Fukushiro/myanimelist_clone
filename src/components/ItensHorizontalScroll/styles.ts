import styled from "styled-components";
const height = 220;
export const OuterContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  button {
    color: black;
    z-index: 999;
  }
  button:nth-child(1) {
    position: absolute;
    left: -120px;
    top: ${height / 2 - 35}px;
    transition: left 0.5s;
  }
  button:nth-child(3) {
    position: absolute;
    right: -120px;
    top: ${height / 2 - 35}px;
    transition: right 0.5s;
  }
  :hover {
    button:nth-child(1) {
      left: 0;
    }
    button:nth-child(3) {
      right: 0;
    }
  }
`;

export const Container = styled.div`
  width: 680px;
  overflow-x: hidden;
  overflow-y: hidden;
  height: ${height}px;
  position: relative;
`;

export const ContainerImages = styled.div<{ numberOfImages: number }>`
  width: ${(props) => {
    return (160 + 20) * props.numberOfImages;
  }}px;
  height: 100%;
  display: flex;
`;

export const PreviousDiv = styled.div`
  background-color: #454a4d;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NextDiv = styled.div`
  background-color: #454a4d;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
  padding: 20px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageDiv = styled.div`
  margin-right: 20px;
  width: 160px;
  height: 100%;
  background-color: red;
`;
