import React, { useState, useEffect } from "react"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import InstagramPosts from "../components/InstagramPosts"

import styled from "styled-components"

import { getNodesFromQuery } from "../service/helper"

import ArticleBlock from "../components/ArticleBlock"
import Paradise from "../components/Paradise"

import StartPageAnimation from "../components/StartpageAnimation"

export const query = graphql`
  fragment getImage on SanityImage {
    _key
    _type
    asset {
      _id
    }
    crop {
      top
      right
      left
      bottom
      _key
      _type
    }
    hotspot {
      height
      _type
      _key
      width
      x
      y
    }
  }
  query RootIndexQuery {
    backgroundImage: file(relativePath: { eq: "structure.png" }) {
      id
      publicURL
    }
    landingPageSection: allSanityLandingPageSection {
      edges {
        node {
          id
          title
          _rawContent
          image {
            ...getImage
          }
        }
      }
    }
  }
`

const LandingPageSections = styled.section`
  position: relative;
  height: 100%;
`
const StartPageWelcome = styled(Paradise)`
  position: absolute;
  margin: auto;
`

const IndexPage = ({ data }) => {
  const landingPageSection = getNodesFromQuery(data.landingPageSection)

  return (
    <Layout showLogo={false} showHeader>
      <SEO title="Home" />
      <StartPageAnimation />
      <LandingPageSections>
        {landingPageSection.map(element => {
          return (
            <ArticleBlock
              animation
              key={element.id}
              {...element}
              className="lp-section"
            />
          )
        })}
      </LandingPageSections>
      <InstagramPosts profile="zen_studios_berlin" />
    </Layout>
  )
}

export default IndexPage
