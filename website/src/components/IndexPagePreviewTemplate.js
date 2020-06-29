import React, { useEffect, useState } from "react"

import styled from "styled-components"
// import { Container, Col, Row } from "react-bootstrap"

import ArticleBlock from "../components/ArticleBlock"
import Paradise from "../components/Paradise"

import { getPreviewData } from "../service/helper"

const LandingPageSections = styled.section`
  position: relative;
  height: 100%;
`
const StartPageWelcome = styled(Paradise)`
  position: absolute;
  margin: auto;
`

const IndexPagePreviewTemplate = props => {
  const [data, setData] = useState(null)

  useEffect(() => {
    getPreviewData(props)
      .then(r => setData(r))
      .catch(err => console.log(err))
  }, [])

  return (
    <LandingPageSections animation={false}>
      <ArticleBlock {...data} className="lp-section" />
    </LandingPageSections>
  )
}

export default IndexPagePreviewTemplate
