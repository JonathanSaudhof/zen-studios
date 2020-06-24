import React, { useEffect, useState } from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import { Container, Col, Row } from "react-bootstrap"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import blockSerializer from "../service/blockSerializer"
import { Match, navigate } from "@reach/router"

const PageContainer = styled(Container)`
  background-color: rgba(238, 238, 238, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 50px;

  margin: 80px auto;
  z-index: 1;
`

const PageContent = ({ data }) => (
  <PageContainer>
    <Row>
      <Col>
        <BlockContent blocks={data} serializers={blockSerializer} />
      </Col>
    </Row>
  </PageContainer>
)

const PagePreview = () => {
  let [data, setData] = useState(null)
  useEffect(() => {
    const r = graphql`
      query PageTemplateQuery($id: String!) {
        site: sanityPage(id: { eq: $id }) {
          id
          title
          type
          _rawBody
        }
      }
    `
  }, [])

  return (
    <Layout showHeader={true} showLogo={true}>
      <Match path="/preview">
        {props => {
          console.log(props)
          if (!props.match) {
            navigate("/")
            return null
          } else {
            return <PageContent location={props.location} />
          }
        }}
      </Match>
    </Layout>
  )
}

export default PagePreview
