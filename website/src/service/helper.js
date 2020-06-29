import imageUrlBuilder from "@sanity/image-url"
import axios from "axios"
import queryString from "querystring"

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

export const getPreviewData = props => {
  const { isDraft, pageId } = queryString.parse(props.location.search)
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
    },
  }
  return axios
    .get(
      `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/doc/${
        process.env.SANITY_DATA_SET
      }/${isDraft ? "drafts." : ""}${pageId}`,
      config
    )
    .then(doc => {
      return doc.data.documents[0]
    })
    .catch(err => console.log(err))
}
