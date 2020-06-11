import imageUrlBuilder from "@sanity/image-url"
// require("dotenv").config()

export const getNodesFromQuery = dataSet => {
  // console.log("DataSet:", dataSet)
  return dataSet.edges.map(element => {
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
