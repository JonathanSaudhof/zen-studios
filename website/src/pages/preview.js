import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import { Container, Col, Row } from "react-bootstrap"

import BlockContent from "@sanity/block-content-to-react"
import blockSerializer from "../service/blockSerializer"
import { Match, navigate } from "@reach/router"
import queryString from "query-string"

import IndexPagePreviewTemplate from "../components/IndexPagePreviewTemplate"
import PagePreviewTemplate from "../components/PagePreviewTemplate"

const PreviewPage = ({ data, errors }) => {
  // console.log("Previe Page props", props)
  return (
    <Layout showHeader={true} showLogo={true}>
      <SEO title={data?.site?.title} />

      <Match path="/preview">
        {props => {
          console.log(props)
          const { type } = queryString.parse(props.location.search)
          console.log("Type", type)
          if (!props.match) {
            navigate("/")
            return null
          }

          switch (type) {
            case "landingPageSection":
              return <IndexPagePreviewTemplate location={props.location} />
            case "page":
              return <PagePreviewTemplate location={props.location} />
            case "post":
              break
          }
        }}
      </Match>
    </Layout>
  )
}

export default PreviewPage
