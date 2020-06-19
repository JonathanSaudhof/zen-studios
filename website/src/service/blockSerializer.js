import React, { useState } from "react"

import { imageUrlFor } from "./helper"
import styled from "styled-components"

const ImageContainer = styled.div`
  width: 250px;
  margin-right: ${props => (props.position === "right" ? "0px" : "10px")};
  margin-left: ${props => (props.position === "left" ? "0px" : "10px")};
  float: ${props => (props.position === "center" ? "unset" : props.position)};
`

const ImageComponent = ({ node }) => {
  console.log("NODE", node.caption)

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

const blockSerializer = {
  types: {
    inlineImage: ImageComponent,
    inlineCta: ({ node }) => (
      <p>
        <center>
          <a className="btn btn-warning" href={node.url}>
            {node.action}
          </a>
        </center>
      </p>
    ),
    /* block: el => {
      return (
        <>
          <span>{el.children}</span>
          <br />
        </>
      )
    }, */
  },
}

export default blockSerializer
