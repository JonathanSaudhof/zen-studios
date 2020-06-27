import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import { Container, Col, Row } from "react-bootstrap"

import BlockContent from "@sanity/block-content-to-react"
import blockSerializer from "../service/blockSerializer"
import { Match, navigate } from "@reach/router"
import queryString from "query-string"

const PageContainer = styled(Container)`
  background-color: rgba(238, 238, 238, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 50px;

  margin: 80px auto;
  z-index: 1;
`
/* export const data = graphql`
  query PageTemplateQuery($id: String!) {
    site: sanityPage(id: { eq: $id }) {
      id
      title
      type
      _rawBody
    }
  }
` */
const PreviewTemplate = props => {
  // console.log(props)
  // console.log("location search", queryString.parse(location.search))
  const data = graphql`
    query PageTemplateQuery($id: String!) {
      site: sanityPage(id: { eq: $id }) {
        id
        title
        type
        _rawBody
      }
    }
  `
  console.log(data)
  return (
    <PageContainer>
      <Row>
        <Col>
          {/*  <BlockContent
            blocks={data?.site?._rawBody}
            serializers={blockSerializer}
          /> */}
        </Col>
      </Row>
    </PageContainer>
  )
}

const PreviewPage = (props, { data, errors }) => {
  console.log("Previe Page props", props)
  return (
    <Layout showHeader={true} showLogo={true}>
      <SEO title={data?.site?.title} />
      <h1>Test</h1>
      <Match path="/preview">
        {props => {
          if (!props.match) {
            navigate("/")
            return null
          } else {
            return (
              <PreviewTemplate location={props.location} pageContext={{}} />
            )
          }
        }}
      </Match>
    </Layout>
  )
}

export default PreviewPage
