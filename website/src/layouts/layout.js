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
import Footer from "../components/footer"

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
  @media (max-width: ${props => props.theme.mobile}){

    &:before{
      background-image: radial-gradient(circle , rgba(0,0,0,0),rgba(0,0,0,0.5));
    }
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

      siteSettings: sanitySiteSetting {
        favIcon {
          asset {
            url
          }
        }
        socialMedia {
          youtube
          twitter
          linkedin
          instagram
          github
          facebook
        }
        title
      }

      footerNav: sanityNavigation(name: { eq: "secondary" }) {
        id
        items {
          title
          redirect
          type
          slug {
            current
            _type
            _key
          }
          id
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} showLogo={true} />
        <Main backgroundImage={data.backgroundImage.publicURL}>{children}</Main>
        <Footer
          navigation={data.footerNav?.items}
          copyright={data.site?.title}
          socialMedia={data.site.title}
        />
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
