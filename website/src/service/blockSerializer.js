import React, { useState } from "react"

import { imageUrlFor } from "./helper"
import styled from "styled-components"

const ImageContainer = styled.div`
  width: 250px;
  ${"" /* float: left; */}
  margin: 5px;
  float: ${props => (props.position === "center" ? "unset" : props.position)};
`

const ImageComponent = ({ node }) => {
  console.log("NODE", node.position)

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
  },
}

export default blockSerializer
