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
  position: fixed;

  width: 25%;
  height: 25%;
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

    const tl0 = gsap.timeline()

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".anim1",
        start: "top top",
        end: "+=200",
        pin: true,
        pinSpacing: false,
        scrub: 1,
      },
    })
    tl1
      .to(".palms", {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "none",
      })
      .to("header", { opacity: 1, duration: 1 }, "-=1")
      .to(".box", { scale: 1.5, duration: 1 }, "-=1")
      .to(".left-palms", {
        duration: 4,
        x: () => -(window.innerWidth / 2),
        rotation: 45,
      })
      .to(
        ".right-palms",
        {
          duration: 4,
          x: () => window.innerWidth / 2,
          rotation: -45,
        },
        "-=4"
      )
      .to("box", { duration: 1, attr: { width: 50, top: 0, left: "50%" } })

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
