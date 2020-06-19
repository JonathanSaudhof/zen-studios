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
  display: flex;
  justify-content: center;
  a {
    width: 300px;
    height: 60px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      #cf6e14;
    border: 2px solid #d5e3fb;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
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
