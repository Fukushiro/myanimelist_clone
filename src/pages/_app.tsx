import React from "react";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    /* * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } */
   
    body {
      background-color: #131516;
      color: white;
    }
  `;
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
