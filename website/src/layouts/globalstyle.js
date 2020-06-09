import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
html, body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", "Arial";
    
  }
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  h1{
    font-size: 32px;
    font-family: "Times New Roman";
    font-weight: 700;
  }

  h2{
    font-size: 24px;
    font-family: "Times New Roman";
  }
  h3{
    font-size: 24px;
    font-family: "Times New Roman";
  }


  p{
    font-size: 18px;
    line-height: 1.5em;
  }

  a {
    text-decoration: none;
    font-weight: 500;
    color: ${({ theme }) => theme.linkColor};
    &:hover{
      text-decoration: none;
    }
  }

`
