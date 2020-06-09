import React, { useState } from "react"
import { Image } from "react-bootstrap"

import { imageUrlFor } from "../service/helper"

const imageComponent = ({ node }) => {
  let [imageUrl, setImageUrl] = useState(0)

  imageUrlFor(node)
    .then(imageBuilder =>
      imageBuilder
        .width(1200)
        .auto("format")
        .fit("scale")
        .url()
    )
    .then(url => setImageUrl(url))
    .catch(err => {
      if (err) throw err
    })

  return (
    <div className="image-container">
      <img src={imageUrl} alt={node.alt} />
      {node.caption && <span className="image-caption">{node.caption}</span>}
    </div>
  )
}
const blockSerializer = {
  types: {
    image: imageComponent,
  },
}

export default blockSerializer
