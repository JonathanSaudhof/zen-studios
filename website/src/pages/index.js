import React, { useState, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import InstagramPosts from "../components/InstagramPosts"

import styled from "styled-components"
import { Container, Jumbotron, Row } from "react-bootstrap"

import { getNodesFromQuery } from "../service/helper"

import { BrandLogo } from "../components/BrandLogo"
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
      fill: ${({ theme }) => theme.primaryDark};
      top: 5px;
      
    }
    :nth-child(2) {
      fill: ${({ theme }) => theme.primaryLight};
    }
  }s
`
const ContentWrapper = styled.div`
  width: 100%;
  padding-top: 10%;
  padding-bottom: 5%;
  margin-bottom: 5%;
  background-image: url('${props => props.imageUrl}');
  background-size: cover;
  border: 1px solid #000000;
  box-sizing: border-box;
  h1 {
    color: #fafafa;
    text-align: left;
    ${"" /* display: flex;
    justify-content: center; */}
    padding-bottom: 5%;
    padding-left: 50px;
  }
`

const MyContainer = styled(Container)`
  height: 100%;
  padding: 50px;
  background-color: rgba(238, 238, 238, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  img {
    width: 100%;
  }
`

const StartPageLogo = styled(BrandLogo)`
  position: absolute;
  top: ${props => props.height / 5}px;
  @media (max-width: ${props => props.theme.mobile}) {
    margin-top: 5px;
    top: ${props => props.height / 6}px;
    svg {
      width: 150px;
    }
  }
`

const ArticleBlock = props => {
  return (
    <>
      <ContentWrapper
        imageUrl={imageUrlFor(props.image).width(960).blur(30).url()}
      >
        <Container>
          <Row>
            <h1>{props.title}</h1>
          </Row>
        </Container>
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
  let [windowHeight, setWindowHeight] = useState(null)
  useEffect(() => {
    // Update the document title using the browser API
    setWindowHeight(window.innerHeight)
    console.log("WindowHeight", windowHeight)
    gsap.registerPlugin(ScrollTrigger)

    const tl0 = gsap.timeline()

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "Body",
        start: "60",
        end: "500",
        scrub: 1,
      },
    })
    tl1
      .to(
        ".left-palms",
        {
          duration: 4,
          x: () => -(window.innerWidth / 2),
          rotation: 45,
          transformOrigin: "0% 0%",
        },
        "-=4"
      )
      .to(
        ".right-palms",
        {
          duration: 4,
          x: () => window.innerWidth / 2,
          rotation: -45,
          transformOrigin: "100% 0%",
        },
        "-=4"
      )
      .to(".box", { duration: 4, scale: 1, ease: "none" })
      .to("header", { opacity: 1, duration: 2 }, "+=1")
  })

  return (
    <Layout showLogo={true}>
      <SEO title="Home" />

      <Canvas className="anim1">
        <StartPageLogo className="box" width="300" height={windowHeight} />
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
      <InstagramPosts />
    </Layout>
  )
}

export default IndexPage
