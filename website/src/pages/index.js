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
  position: absolute;
  width: 50%;
  height: 50%;
`

const Hero = styled(Jumbotron)`
  background-color: ${props => props.inputColor || "palevioletred"};
  min-height: 100vh;
`

const FullPageContainer = ({ children, inputColor }) => {
  return <Hero inputColor={inputColor}>{children}</Hero>
}

const Canvas = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: calc(100vh - ${props => props.theme.headerHeight});
`
const LandingPageSections = styled.section``

const NoScroll = styled.div`
  overflow: hidden;
`

const LeftPalms = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  path {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  }
`

const RightPalms = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
`
const Palms = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
 
  svg {
    height: 100%;
    width: auto;
    position: absolute;
    
    :first-child {
      fill: ${props => props.theme.primaryLight};
      top: 10px;
      height: 95%;
    }
    :nth-child(2) {
      fill: ${props => props.theme.primaryDark};
    }
  }s
`
const IndexPage = ({ data }) => {
  console.log(data)

  const landingPageSection = getNodesFromQuery(data.landingPageSection)
  // console.log(getNodesFromQuery(data?.localImage))

  useEffect(() => {
    // Update the document title using the browser API
  })
  return (
    <Layout>
      <SEO title="Home" />

      <Canvas>
        <BrandLogo className="box" />
        <Palm fill="black" />
        <Palms>
          <LeftPalms>
            <Palm transform="scale(1,1)" />
            <Palm transform="scale(1,1)" />
          </LeftPalms>
          <RightPalms>
            <Palm transform="scale(-1,1)" />
            <Palm transform="scale(-1,1)" />
          </RightPalms>
        </Palms>
      </Canvas>
      {/* <LandingPageSections>
        {landingPageSection.map(element => (
          <>
            <h1>{element.title}</h1>
            <BlockContent
              blocks={element._rawContent}
              serializers={blockSerializer}
            />
          </>
        ))}
      </LandingPageSections> */}
    </Layout>
  )
}

export default IndexPage
