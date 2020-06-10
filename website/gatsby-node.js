/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// const { format } = require("date-fns")

// async function createBlogPostPages(graphql, actions, reporter) {
//   const { createPage } = actions
//   const result = await graphql(`
//     query {
//       allSanityPost(filter: { slug: { current: { ne: null } } }) {
//         edges {
//           node {
//             id
//             publishedAt
//             slug {
//               current
//             }
//           }
//         }
//       }
//     }
//   `)
//   reporter.info(`Result Data: ${result}`)
//   if (result.errors) throw result.errors

//   const postEdges = (result.data.allSanityPost || {}).edges || []

//   postEdges.forEach((edge, index) => {
//     const { id, slug = {}, publishedAt } = edge.node
//     const dateSegment = format(new Date(publishedAt), "yyyy/MM")
//     const path = `/blog/${dateSegment}/${slug.current}/`

//     reporter.info(`Creating blog post page: ${path}`)

//     createPage({
//       path,
//       component: require.resolve("./src/templates/post-template.js"),
//       context: { id },
//     })
//   })
// }

// // async function createPages(graphql, actions, reporter) {
// //   const { createPage } = actions
// //   const result = await graphql(`
// //     query {
// //       allSanityPage(filter: { slug: { current: { ne: null } } }) {
// //         edges {
// //           node {
// //             id
// //             title
// //             category {
// //               title
// //             }
// //             type
// //             slug {
// //               current
// //             }
// //           }
// //         }
// //       }
// //     }
// //   `)

// //   if (result.errors) throw result.errors

// //   const postEdges = (result.data.allSanityPage || {}).edges || []

// //   postEdges.forEach((edge, index) => {
// //     const { id, slug = {}, type, title, category } = edge.node
// //     let path, component
// //     let context = { id }

// //     /*   switch (type) {
// //       case "single": */
// //     path = `/${slug.current}/`
// //     component = require.resolve("./src/templates/page.tsx")
// //     reporter.info(`Creating Single: ${path}`)
// //     /*       break
// //       case "category":
// //         path = `/blog/${category?.title}`
// //         component = require.resolve("./src/templates/categoryOverviewPage.tsx")
// //         reporter.info(`Creating Blog Category Page: ${path}`)
// //         context = {
// //           title: title,
// //           category: category.title,
// //         }
// //         break
// //     }
// //  */
// //     createPage({
// //       path,
// //       component,
// //       context,
// //     })
// //   })
// // }

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   await createBlogPostPages(graphql, actions, reporter)
//   // await createWorkPages(graphql, actions, reporter)
//   // await createPages(graphql, actions, reporter)
// }
