import React, { useState, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import InstagramPosts from "../components/InstagramPosts"

import styled from "styled-components"

import { getNodesFromQuery } from "../service/helper"

import { BrandLogo } from "../components/BrandLogo"
import ArticleBlock from "../components/ArticleBlock"
import Paradise from "../components/Paradise"
import Palm from "../assets/palme-1.svg"
import GummiL from "../assets/gummi-baum-left.svg"
import GummiR from "../assets/gummi-baum-right.svg"

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

const Canvas = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100%;
`
const LandingPageSections = styled.section`
  position: relative;
  height: 100%;
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
    transform: scale(-1, 1);
  }
`
const Palms = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 2;
  div {
    overflow:hidden
  }
  svg {
    height: 100%;
    width: auto;
    position: absolute;
    :first-child {
      fill: ${({ theme }) => theme.primaryDark};
      top: 5px;
      
    }
    :nth-child(2) {
      fill: #395231;
    }
  }s
`

const GummiLeft = styled(GummiL)`
  position: absolute;
  left: 0px;
  bottom: 0px;
  height: auto;
  width: 50%;
`
const GummiRight = styled(GummiR)`
  position: absolute;
  right: 0px;
  bottom: 0px;
  height: auto;
  width: 50%;
`
const LogoContainer = styled.div`
  height: auto;
  width: 300px;
  position: absolute;
  top: 40%;
  display: flex;
  flex-direction: column;
`

const StartPageLogo = styled(BrandLogo)`
  transform-origin: center center;
  z-index: 1;
  @media (max-width: ${props => props.theme.mobile}) {
    margin-top: 5px;
    top: 12.5%;
    svg {
      width: 150px;
    }
  }
`
const StartPageWelcome = styled(Paradise)`
  position: absolute;
  margin: auto;
`

const IndexPage = ({ data }) => {
  const landingPageSection = getNodesFromQuery(data.landingPageSection)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "60",
        end: "500",
        scrub: 1,
      },
    })

    tl1
      .to(".left-palms", {
        duration: 1,
        x: () => -(window.innerWidth / 2),
        rotation: 45,
        transformOrigin: "0% 0%",
      })
      .to(
        ".right-palms",
        {
          duration: 1,
          x: () => window.innerWidth / 2,
          rotation: -45,
          transformOrigin: "100% 0%",
        },
        "-=1"
      )
      .to(
        "#gummi-left",
        {
          duration: 1,
          scale: 2,
          rotation: -40,
          transformOrigin: "100% 50%",
          ease: "none",
        },
        "-=1"
      )
      .to(
        "#gummi-right",
        {
          duration: 1,
          scale: 2,
          rotation: 40,
          transformOrigin: "0% 50%",
          ease: "none",
        },
        "-=1"
      )
      .to(".headerLogo", { opacity: 1, duration: 2 }, "+=1")
  })

  return (
    <Layout showLogo={false} showHeader>
      <SEO title="Home" />

      <Canvas className="anim1">
        <LogoContainer>
          <StartPageLogo className="box" width="100%" />
          <GummiLeft width="100" height="auto" id="gummi-left" />
          <GummiRight width="100" height="auto" id="gummi-right" />
        </LogoContainer>
        <Palms>
          <LeftPalms className="palms left-palms">
            <Palm transform="scale(1,1)" />
            <Palm transform="scale(1,1)" />
          </LeftPalms>

          <RightPalms className="palms right-palms">
            <Palm transform="scale(-1,1)" />
            <Palm transform="scale(-1,1)" />
          </RightPalms>
        </Palms>
      </Canvas>
      <LandingPageSections>
        {landingPageSection.map(element => {
          return <ArticleBlock {...element} />
        })}
        ‚
      </LandingPageSections>
      <InstagramPosts profile="zen_studios_berlin" />
    </Layout>
  )
}

export default IndexPage
