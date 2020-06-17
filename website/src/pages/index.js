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

const BrandLogo = props => {
  const Wrapper = styled.div`
    position: fixed;
    background-color: black;
    padding: 0.5rem;
    border-radius: 3px;
  `
  return (
    <Wrapper className={props.className}>
      <Logo />
    </Wrapper>
  )
}

/* const BrandLogo = styled(Logo)`
  position: fixed;
  display: flex;
  justify-content: center;

  
  @media (max-width: ${props => props.theme.mobile}) {
    margin: auto;
  } 
`*/

const Hero = styled(Jumbotron)`
  background-color: ${props => props.inputColor || "palevioletred"};
  min-height: 100vh;
`
const Content = styled.section`
  background-color: red;
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

const ScrollWrapper = styled.div`
  position: relative;
  overflow-y: scroll;
  width: 100%;
  height: auto;
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
  div {
    overflow:hidden
  }
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
  padding-top: 10%;
  padding-bottom: 5%;
  margin-bottom: 5%;
  background-image: url('${props => props.imageUrl}');
  background-size:cover;
  h1 {
    color: white;
    display: flex;
    justify-content: center;
    padding-bottom: 5%;
  }
`

const MyContainer = styled(Container)`
  height: 100%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  img {
    width: 100%;
  }
`

const ArticleBlock = props => {
  return (
    <>
      <ContentWrapper imageUrl={imageUrlFor(props.image).width(960).url()}>
        <h1>{props.title}</h1>
        <MyContainer>
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

    const tl0 = gsap.timeline()

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".anim1",
        start: "top top",
        end: "+=200",
        scrub: true,
      },
    })
    tl1
      .to(
        ".left-palms",
        {
          duration: 2,
          x: () => -(window.innerWidth / 2),
          rotation: 45,
          transformOrigin: "0% 0%",
        },
        "-=4"
      )
      .to(
        ".right-palms",
        {
          duration: 2,
          x: () => window.innerWidth / 2,
          rotation: -45,
          transformOrigin: "100% 0%",
        },
        "-=4"
      )
      .to("header", { opacity: 1, duration: 1 }, "-=1")
      .to(
        ".box",
        { scale: 1.7, duration: 1, transformOrigin: "50% 50%" },
        "-=2"
      )

    ScrollTrigger.create({ trigger: ".anim1", pin: true })
  })

  return (
    <Layout>
      <SEO title="Home" />

      <Canvas className="anim1">
        <BrandLogo className="box" />
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
    </Layout>
  )
}

export default IndexPage
