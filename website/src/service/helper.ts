import imageUrlBuilder from "@sanity/image-url"

export const getNodesFromQuery = (dataSet: { edges: object[] }) => {
  return dataSet.edges.map((element: { node: object }) => {
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
