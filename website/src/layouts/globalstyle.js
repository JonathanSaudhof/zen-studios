import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
html, body {
    margin: 0;
    padding: 0;
    font-family: "Source Sans Pro";
    
  }
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  h1{
    font-size: 48px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    line-height: 60px;
  }

  h2{
    font-size: 36px;
    font-family: "Source Sans Pro";
    font-style: normal; 
    font-weight: 400; 
    line-height: 40px;
  }
  h3{
    font-size: 24px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 300;
    line-height: 30px;
  }

  h4{
    font-size: 20px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 300;
    line-height: 30px;
  }


  p{
    font-size: 18px;
    font-style: normal;
    font-weight: 200;
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

  .image-caption {
    font-size: 14px;
    font-family: "Source Sans Pro";
    font-weight: 200;
    font-style: italic;
  }

`
