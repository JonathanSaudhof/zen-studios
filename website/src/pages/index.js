import React from "react"
import Img from "gatsby-image"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import { Jumbotron } from "react-bootstrap"

import { getNodesFromQuery } from "../service/helper"
import BlockContent from "@sanity/block-content-to-react"
import blockSerializer from "../service/blockSerializer"
import { imageUrlFor } from "../service/helper"

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

const Hero = styled(Jumbotron)`
  background-color: ${props => props.inputColor || "palevioletred"};
  min-height: 100vh;
`

const FullPageContainer = ({ children, inputColor }) => {
  return <Hero inputColor={inputColor}>{children}</Hero>
}

const IndexPage = ({ data }) => {
  console.log(data)

  const landingPageSection = getNodesFromQuery(data.landingPageSection)
  // console.log(getNodesFromQuery(data?.localImage))
  return (
    <Layout>
      <SEO title="Home" />
      {landingPageSection.map(element => (
        <>
          <h1>{element.title}</h1>
          <BlockContent
            blocks={element._rawContent}
            serializers={blockSerializer}
          />
        </>
      ))}
    </Layout>
  )
}

export default IndexPage
