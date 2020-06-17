import imageUrlBuilder from "@sanity/image-url"
// require("dotenv").config()

export const getNodesFromQuery = dataSet => {
  // console.log("DataSet:", dataSet)
  return dataSet.edges.map(element => {
    return element.node
  })
}

const builder = imageUrlBuilder({
  projectId: "nkdz9z1y",
  dataset: "staging",
})

export function imageUrlFor(source) {
  return builder.image(source)
}
