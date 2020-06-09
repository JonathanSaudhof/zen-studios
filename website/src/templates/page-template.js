import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts"
import BlockContent from "@sanity/block-content-to-react"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"

// components

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    site: sanityPage(id: { eq: $id }) {
      id
      title
      type
      _rawBody
    }
  }
`

const PageTemplate = ({ data, errors }) => (
  <Layout className="page">
    <SEO title={`${data.site?.title}`} />
      <Row>
        <Col>
          <div className="page-body-wrapper">
            <SinglePage
              siteTitle={data.site?.title}
              content={data.site?._rawBody}
            />
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default PageTemplate
