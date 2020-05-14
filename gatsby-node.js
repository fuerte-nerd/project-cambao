const path = require("path")
const config = require("./gatsby-config")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve("src/templates/article.js")
  const result = await graphql(`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "articles" }
          extension: { eq: "md" }
        }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error while running article query")
    return
  }
  result.data.allFile.edges.forEach(({ node }) => {
    config.siteMetadata.supportedLanguages.map(language => {
      if (language !== "en") {
        createPage({
          path: `/${language}/articles${node.childMarkdownRemark.fields.slug}`,
          component: articleTemplate,
          context: { id: node.id, lang: language },
        })
      } else {
        createPage({
          path: `/articles${node.childMarkdownRemark.fields.slug}`,
          component: articleTemplate,
          context: { id: node.id, lang: language },
        })
      }
    })
  })
}
