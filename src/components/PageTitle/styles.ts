import styled from "styled-components";
const textLeftSpace = 10;
export const Container = styled.div`
  background-color: #232628;
  display: flex;

  h1 {
    font-size: 1.5rem;
    font-weight: 900;
    width: 100% - ${textLeftSpace}px;
    margin-left: ${textLeftSpace}px;
  }
`;
