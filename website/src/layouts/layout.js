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
import Footer from "../components/Footer"

import { theme } from "./theme"
import { GlobalStyle } from "./globalstyle"

const Main = styled.main`
  min-height: 100vh;
  background-size:100px;
  background-color: ${props => props.theme.background};
  background-attachment: fixed;
  background-image: radial-gradient(
    farthest-side,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.8)
  );
  }
  @media (max-width: ${props => props.theme.mobile}){

    &:before{
      background-image: radial-gradient(circle , rgba(0,0,0,0),rgba(0,0,0,0.5));
    }
  }

`
const PatternOverlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  padding:${props => props.theme.headerHeight} 0;
  background-image:  url("${props => props.backgroundImage}");
  background-size: 30px;
  background-attachment: fixed;
  
`

const Layout = ({ showLogo, showHeader, children }) => {
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
          platform
          url
        }
        title
      }

      headerNav: sanityNavigation(name: { eq: "primary" }) {
        id
        items {
          title
          redirect
          slug {
            current
          }
          id
        }
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
  // console.log("data", data.siteSettings.socialMedia)
  console.log("navigation layout", data)
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header
          siteTitle={data.site.siteMetadata.title}
          showHeader={showHeader}
          showLogo={showLogo}
          navigation={data.headerNav?.items}
        />
        <Main>
          <PatternOverlay backgroundImage={data.backgroundImage.publicURL}>
            {children}
          </PatternOverlay>
        </Main>
        <Footer
          navigation={data.footerNav?.items}
          copyright={data.siteSettings?.title}
          socialMedia={data.siteSettings?.socialMedia}
        />
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
