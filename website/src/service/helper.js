import imageUrlBuilder from "@sanity/image-url"

export const getNodesFromQuery = ({ edges }) => {
  return dataSet.edges.map(({ node }) => {
    return element.node
  })
}

const builder = imageUrlBuilder({
  projectId: "4tgjss9y",
  dataset: process.env.Production ? "production" : "staging",
})

export async function imageUrlFor(source) {
  return builder.image(source)
}
