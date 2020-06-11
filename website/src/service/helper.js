import imageUrlBuilder from "@sanity/image-url"
require("dotenv").config()

export const getNodesFromQuery = ({ edges }) => {
  return dataSet.edges.map(({ node }) => {
    return element.node
  })
}

const builder = imageUrlBuilder({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.Production ? "production" : "staging",
})

export async function imageUrlFor(source) {
  return builder.image(source)
}
