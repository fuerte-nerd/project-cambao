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
  config.siteMetadata.supportedLanguages.map(async language => {
    let paginationQuery = await graphql(`
      {
        allFile(
          filter: {
            sourceInstanceName: { eq: "articles" }
            extension: { eq: "md" }
            childMarkdownRemark: { frontmatter: { language: { eq: "${language}"} } }
          }
          sort: {
            fields: childMarkdownRemark___frontmatter___date
            order: DESC
          }
        ) {
          edges {
            node {
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
    if (paginationQuery.errors) {
      reporter.panicOnBuild("Error while running Pagination query")
      return
    }

    const posts = paginationQuery.data.allFile.edges
    const postsPerPage = 5
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `${language}/` : `${language}/${i + 1}`,
        component: path.resolve("src/templates/index.js"),
        context: {
          language: language,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })
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
        context: { id: node.childMarkdownRemark.id, language: language },
      })
    })
  })

  const theDogsTemplate = path.resolve("src/templates/the-dogs.js")
  config.siteMetadata.supportedLanguages.map(language => {
    createPage({
      path: `/${language}/the-dogs`,
      component: theDogsTemplate,
      context: { language: language },
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
        context: { id: node.childMarkdownRemark.id, language: language },
      })
    })
  })
  const staticPageTemplate = path.resolve("src/templates/staticPage.js")
  const whoAreWeQuery = await graphql(`
    {
      file(
        name: { eq: "whoarewe" }
        sourceInstanceName: { eq: "static_content" }
      ) {
        childMarkdownRemark {
          id
        }
      }
    }
  `)
  const adoptQuery = await graphql(`
    {
      file(name: { eq: "adopt" }) {
        childMarkdownRemark {
          id
        }
      }
    }
  `)
  const fosterQuery = await graphql(`
    {
      file(name: { eq: "foster" }) {
        childMarkdownRemark {
          id
        }
      }
    }
  `)
  const donateQuery = await graphql(`
    {
      file(name: { eq: "donate" }) {
        childMarkdownRemark {
          id
        }
      }
    }
  `)
  const volunteerQuery = await graphql(`
    {
      file(name: { eq: "volunteer" }) {
        childMarkdownRemark {
          id
        }
      }
    }
  `)
  config.siteMetadata.supportedLanguages.map(language => {
    createPage({
      path: `/${language}/who-are-we`,
      component: staticPageTemplate,
      context: {
        id: whoAreWeQuery.data.file.childMarkdownRemark.id,
        language: language,
        redirectUrl: "/who-are-we",
        pageName: "whoAreWe",
      },
    })
    createPage({
      path: `/${language}/adopt`,
      component: staticPageTemplate,
      context: {
        id: adoptQuery.data.file.childMarkdownRemark.id,
        language: language,
        redirectUrl: "/adopt",
        pageName: "adopt",
      },
    })
    createPage({
      path: `/${language}/foster`,
      component: staticPageTemplate,
      context: {
        id: fosterQuery.data.file.childMarkdownRemark.id,
        language: language,
        redirectUrl: "/foster",
        pageName: "foster",
      },
    })
    createPage({
      path: `/${language}/donate`,
      component: staticPageTemplate,
      context: {
        id: donateQuery.data.file.childMarkdownRemark.id,
        language: language,
        redirectUrl: "/donate",
        pageName: "donate",
      },
    })
    createPage({
      path: `/${language}/volunteer`,
      component: staticPageTemplate,
      context: {
        id: volunteerQuery.data.file.childMarkdownRemark.id,
        language: language,
        redirectUrl: "/volunteer",
        pageName: "volunteer",
      },
    })
    const contactTemplate = path.resolve("src/templates/contact.js")
    createPage({
      path: `/${language}/contact`,
      component: contactTemplate,
      context: { language: language },
    })
    const thanksTemplate = path.resolve("src/templates/thanks.js")
    createPage({
      path: `/${language}/thanks`,
      component: thanksTemplate,
      context: { language: language },
    })
  })
}
