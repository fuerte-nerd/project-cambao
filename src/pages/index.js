import React from "react"
import { graphql, useStaticQuery, navigate } from "gatsby"
import IndexTemplate from "../templates/index"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      articles: allFile(
        filter: {
          sourceInstanceName: { eq: "articles" }
          extension: { eq: "md" }
        }
      ) {
        edges {
          node {
            atime
            childMarkdownRemark {
              fields {
                slug
              }
              frontmatter {
                post_title {
                  en
                }
                post_body {
                  en
                }
                featured_image {
                  childImageSharp {
                    fixed(width: 845) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
      site_content: file(
        sourceInstanceName: { eq: "static_content" }
        name: { eq: "home" }
      ) {
        childMarkdownRemark {
          frontmatter {
            heading {
              en
            }
            subheading {
              en
            }
          }
        }
      }
    }
  `)
  const static_content = data.site_content.childMarkdownRemark.frontmatter
  const articles = data.articles.edges.map(i => {
    const article = i.node.childMarkdownRemark.frontmatter
    return {
      title: article.post_title.en,
      body: article.post_body.en,
      image: article.featured_image.childImageSharp.fixed.src,
      date: i.node.atime,
      slug: i.node.childMarkdownRemark.fields.slug,
    }
  })
  return (
    <IndexTemplate
      seo_title="Home"
      heading={static_content.heading.en}
      subheading={static_content.subheading.en}
      articles={articles}
    />
  )
}

export default IndexPage
