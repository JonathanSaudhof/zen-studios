import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import blockSerializer from "../service/blockSerializer"
import { Container, Row } from "react-bootstrap"
import { imageUrlFor } from "../service/helper"

import styled from "styled-components"

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
    padding-bottom: 5%;
    padding-left: 50px;
  }
`
const ArticleBlock = props => {
  return (
    <>
      <ContentWrapper
        imageUrl={imageUrlFor(props.image).width(960).blur(30).url()}
        id={props.title}
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

export default ArticleBlock
