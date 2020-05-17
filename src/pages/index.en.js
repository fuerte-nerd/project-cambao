import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setLanguage } from "../redux/actions"
import { graphql, useStaticQuery } from "gatsby"
import IndexTemplate from "../templates/index"

const IndexPage = props => {
  props.dispatch(setLanguage("en"))
  const data = useStaticQuery(graphql`
    {
      articles: allFile(
        filter: {
          sourceInstanceName: { eq: "articles" }
          extension: { eq: "md" }
          childMarkdownRemark: { frontmatter: { language: { eq: "en" } } }
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
                title
                language
                featured_image {
                  childImageSharp {
                    fixed(width: 845) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
              html
              excerpt(pruneLength: 250)
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
    const article = i.node.childMarkdownRemark
    return {
      title: article.frontmatter.title,
      body: article.html,
      image: article.frontmatter.featured_image.childImageSharp.fixed.src,
      date: i.node.atime,
      slug: article.fields.slug,
      excerpt: article.excerpt,
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

export default connect()(IndexPage)
