import React, { useState, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import { Container, Jumbotron } from "react-bootstrap"

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
const Content = styled.section`
  background-color: red;
`

const Canvas = styled.section`
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  position: relative;
  height: calc(100vh - ${props => props.theme.headerHeight});
`
const LandingPageSections = styled.section``

const NoScroll = styled.div`
  overflow: hidden;
`

const LeftPalms = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  svg {
    top: 0;
    right: 0;
  }
`

const RightPalms = styled.div`
  position: relative;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  svg {
    top: 0;
    left: 0;
  }
`
const Palms = styled.div`
  position: relative;
  display: flex;
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
  const [scrollPos, setScrollPos] = useState(0)
  const landingPageSection = getNodesFromQuery(data.landingPageSection)
  // console.log(getNodesFromQuery(data?.localImage))

  useEffect(() => {
    // Update the document title using the browser API
    window.addEventListener("scroll", function (e) {
      setScrollPos(window.scrollY)
    })
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
      <Content>
        <h1>Scroll-Pos:{scrollPos}</h1>
        <Container>
          <LandingPageSections>
            {landingPageSection.map(element => (
              <>
                <h1>{element.title}</h1>
                <BlockContent
                  blocks={element._rawContent}
                  serializers={blockSerializer}
                />
              </>
            ))}
          </LandingPageSections>
        </Container>
      </Content>
    </Layout>
  )
}

export default IndexPage
