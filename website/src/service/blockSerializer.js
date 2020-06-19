import React, { useState } from "react"

import { imageUrlFor } from "./helper"
import styled from "styled-components"

const ImageContainer = styled.div`
  width: 250px;
  margin-right: ${props => (props.position === "right" ? "0px" : "10px")};
  margin-left: ${props => (props.position === "left" ? "0px" : "10px")};
  float: ${props => (props.position === "center" ? "unset" : props.position)};
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  a {
    width: 250px;
    color: ${props => props.theme.blockCTA};
    background-color: ${props => props.theme.primaryDark};
    &:hover {
      background-color: ${props => props.theme.primaryHover};
    }
  }
`

const ImageComponent = ({ node }) => {
  // console.log("NODE", node.caption)

  return (
    <ImageContainer position={node.position}>
      <img
        src={imageUrlFor(node).width(1200).auto("format").fit("scale").url()}
        alt={node.alt}
      />
      {node.caption && <span className="image-caption">{node.caption}</span>}
    </ImageContainer>
  )
}

const ButtonComponent = ({ node }) => {
  console.log("NODE", node.url)
  return (
    <ButtonContainer>
      <a className="btn btn-primary" href={node.url}>
        {node.action}
      </a>
    </ButtonContainer>
  )
}

const blockSerializer = {
  types: {
    inlineImage: ImageComponent,
    inlineCta: ButtonComponent,
  },
}

export default blockSerializer
