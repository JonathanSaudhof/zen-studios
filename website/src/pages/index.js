import React, { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import { Jumbotron } from "react-bootstrap"

import { getNodesFromQuery } from "../service/helper"
import Logo from "../assets/logo.svg"
import Palm from "../assets/palme-1.svg"
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

const BrandLogo = styled(Logo)`
  color: white;
  height: 500px;
`

const Hero = styled(Jumbotron)`
  background-color: ${props => props.inputColor || "palevioletred"};
  min-height: 100vh;
`

const FullPageContainer = ({ children, inputColor }) => {
  return <Hero inputColor={inputColor}>{children}</Hero>
}

const Canvas = styled.div`
  svg {
    position: absolute;
  }
`
const IndexPage = ({ data }) => {
  console.log(data)

  const landingPageSection = getNodesFromQuery(data.landingPageSection)
  // console.log(getNodesFromQuery(data?.localImage))

  useEffect(() => {
    // Update the document title using the browser API
    gsap.to(".box", { rotation: 27, x: 200, duration: 1 })
  })
  return (
    <Layout>
      <SEO title="Home" />
      <Canvas>
        <Logo height="500" width="500" className="box" />
        <Palm height="500" width="500" transform="scale(1.5,1.5)" />
        <Palm
          height="500"
          width="500"
          transform="translate(500, 0) scale(-1.5,1.5)"
        />
      </Canvas>
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
