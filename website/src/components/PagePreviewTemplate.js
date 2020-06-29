import React, { useEffect, useState } from "react"

import styled from "styled-components"
import { Container, Col, Row } from "react-bootstrap"

import BlockContent from "@sanity/block-content-to-react"
import blockSerializer from "../service/blockSerializer"
import { getPreviewData } from "../service/helper"

const PageContainer = styled(Container)`
  background-color: rgba(238, 238, 238, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 50px;

  margin: 80px auto;
  z-index: 1;
`

const PagePreviewTemplate = props => {
  const [data, setData] = useState(null)

  useEffect(() => {
    getPreviewData(props)
      .then(r => setData(r))
      .catch(err => console.log(err))
  }, [])

  return (
    <PageContainer>
      <Row>
        <Col>
          {data ? (
            <BlockContent blocks={data?.body} serializers={blockSerializer} />
          ) : (
            ""
          )}
        </Col>
      </Row>
    </PageContainer>
  )
}

export default PagePreviewTemplate
