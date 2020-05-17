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
  const articlesQuery = await graphql(`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "articles" }
          extension: { eq: "md" }
        }
      ) {
        edges {
          node {
            childMarkdownRemark {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)

  if (articlesQuery.errors) {
    reporter.panicOnBuild("Error while running article query")
    return
  }
  articlesQuery.data.allFile.edges.forEach(({ node }) => {
    config.siteMetadata.supportedLanguages.map(language => {
      createPage({
        path: `/${language}/articles${node.childMarkdownRemark.fields.slug}`,
        component: articleTemplate,
        context: { id: node.childMarkdownRemark.id, lang: language },
      })
    })
  })
  const dogTemplate = path.resolve("src/templates/dog.js")
  const dogsQuery = await graphql(`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "dogs" }, extension: { eq: "md" } }
      ) {
        edges {
          node {
            childMarkdownRemark {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)
  if (dogsQuery.errors) {
    reporter.panicOnBuild("Error while running dogs query")
  }
  dogsQuery.data.allFile.edges.forEach(({ node }) => {
    config.siteMetadata.supportedLanguages.map(language => {
      createPage({
        path: `/${language}/dogs${node.childMarkdownRemark.fields.slug}`,
        component: dogTemplate,
        context: { id: node.childMarkdownRemark.id, lang: language },
      })
    })
  })
}
