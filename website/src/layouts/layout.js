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
  min-height: 100vh;
  background-image: url("${props => props.backgroundImage}");
  background-size:30px;
  background-color: ${props => props.theme.background};
  padding-top: 60px;
  padding-left: 20px;
  color: white;
`

const Footer = styled.footer`
  height: 60px;
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

      brandLogo: file(relativePath: { eq: "logo.svg" }) {
        id
        publicURL
      }
    }
  `)
  console.log(data.brandLogo)
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} showLogo />

        <Main backgroundImage={data.backgroundImage.publicURL}>{children}</Main>

        <Footer>
          <Container>
            <p>Copyright © mein-hunde-ratgeber.de</p>
          </Container>
        </Footer>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
