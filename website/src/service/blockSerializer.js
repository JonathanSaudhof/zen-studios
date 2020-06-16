import React, { useState } from "react"

import { imageUrlFor } from "./helper"

const ImageComponent = ({ node }) => {
  let [imageUrl, setImageUrl] = useState(0)

  imageUrlFor(node)
    .then(imageBuilder =>
      imageBuilder.width(1200).auto("format").fit("scale").url()
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

function EFG({ abc, def }) {
  let hdf = 0
  hdf = abc + def
  return hdf
}

const XYZ = props => {
  const deineMudder = "schlechter Witz"

  return (
    <>
      <h1>{deineMudder}</h1>
      <EFG abc="1" def="2" />
    </>
  )
}

const blockSerializer = {
  types: {
    inlineImage: ImageComponent,
  },
}

export default blockSerializer
