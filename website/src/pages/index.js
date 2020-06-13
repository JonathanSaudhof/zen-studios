import React, { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import { Jumbotron } from "react-bootstrap"

import { getNodesFromQuery } from "../service/helper"
import BlockSerializer from "../service/blockSerializer"

import Logo from "../assets/logo.svg"
import Palm from "../assets/palme-1.svg"

export const query = graphql`
  query RootIndexQuery {
    backgroundImage: file(relativePath: { eq: "structure.png" }) {
      id
      publicURL
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
    </Layout>
  )
}

export default IndexPage
