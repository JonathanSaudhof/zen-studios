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
    transform: ${props => `rotate(${props.rotation})`};
  }
`

const RightPalms = styled.div`
  position: relative;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;

  svg {
    transform: ${props => `rotate(${props.rotation})`};
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
const ContentWrapper = styled.div`
  width: 100%;
  background-image: url('${props => props.imageUrl}');
  background-size:cover;
`

const MyContainer = styled(Container)`
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  img {
    width: 100%;
  }
`

const ArticleBlock = props => {
  return (
    <>
      <ContentWrapper imageUrl={imageUrlFor(props.image).width(960).url()}>
        <MyContainer>
          <h1>{props.title}</h1>
          <BlockContent
            blocks={props._rawContent}
            serializers={blockSerializer}
          />
        </MyContainer>
      </ContentWrapper>
    </>
  )
}

const IndexPage = ({ data }) => {
  const landingPageSection = getNodesFromQuery(data.landingPageSection)
  // console.log(getNodesFromQuery(data?.localImage))

  useEffect(() => {
    // Update the document title using the browser API
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      ScrollTrigger: { trigger: ".palms", scrub: true, markers: true },
    })
    tl.from(".palms", {
      opacity: 0,
      x: -100,
      duration: 2,
      ease: "none",
    }).from(".right-palms", {
      opacity: 1,
      x: +100,
      duration: 2,
      ease: "elastic",
    })
  })

  return (
    <Layout>
      <SEO title="Home" />
      <Canvas>
        <BrandLogo className="box" />
        <Palms>
          <LeftPalms className="palms left-palms" rotation={scrollPos}>
            <Palm transform="scale(1,1)" />
            <Palm transform="scale(1,1)" />
          </LeftPalms>
          <RightPalms className="palms right-palms" rotation={scrollPos}>
            <Palm transform="scale(-1,1)" />
            <Palm transform="scale(-1,1)" />
          </RightPalms>
        </Palms>
      </Canvas>
      <Content>
        <h1>Scroll-Pos:{scrollPos}</h1>
        <LandingPageSections>
          {landingPageSection.map(element => {
            return <ArticleBlock {...element} />
          })}
          ‚
        </LandingPageSections>
      </Content>
    </Layout>
  )
}

export default IndexPage
