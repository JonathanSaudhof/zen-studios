import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import { Jumbotron } from "react-bootstrap"

import { getNodesFromQuery } from "../service/helper"

export const query = graphql`
  query RootIndexQuery {
    backgroundImage: file(relativePath: { eq: "structure.png" }) {
      id
      publicURL
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
  // console.log(getNodesFromQuery(data?.localImage))
  return (
    <Layout>
      <SEO title="Home" />
      <FullPageContainer inputColor="#1E442F">Test</FullPageContainer>
    </Layout>
  )
}

export default IndexPage
