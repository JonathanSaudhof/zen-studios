/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import Header from "../components/header"
import { Container } from "react-bootstrap"

import { theme } from "./theme"
import { GlobalStyle } from "./globalstyle"

const Main = styled.main`
  background-image:  url("${props => props.backgroundImage}");
  background-color: ${props => props.theme.background};
  background-size: 30px;
  padding-top:${props => props.theme.headerHeight};
  background-attachment:fixed;
  &:before{
    content: ' ';
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100vh;
    background-image: radial-gradient(circle, rgba(0,0,0,0),rgba(0,0,0,0.8));
    background-attachment:fixed;
  }
  

`

const Footer = styled.footer`
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #c4c4c4;
  p {
    margin: 0;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      backgroundImage: file(relativePath: { eq: "structure.png" }) {
        id
        publicURL
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main backgroundImage={data.backgroundImage.publicURL}>
          {children}
          <Footer>
            <Container>
              <p>Copyright © mein-hunde-ratgeber.de</p>
            </Container>
          </Footer>
        </Main>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
