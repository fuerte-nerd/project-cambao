import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "@material-ui/core"
import SEO from "../components/seo"
import Heading from "../components/index/Heading"
import ArticleCard from "../components/index/ArticleCard"

const IndexPage = () => {
  const articles = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "articles" }
          extension: { eq: "md" }
        }
      ) {
        edges {
          node {
            atime
            childMarkdownRemark {
              frontmatter {
                content_en {
                  title_en
                  body_en
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
    }
  `)
  console.log(articles)
  return (
    <>
      <SEO title="Home" />
      <Heading />
      <Container>
        {articles.allFile.edges.map(i => (
          <ArticleCard
            title={i.node.childMarkdownRemark.frontmatter.content_en.title_en}
            body={i.node.childMarkdownRemark.frontmatter.content_en.body_en}
            image={
              i.node.childMarkdownRemark.frontmatter.featured_image
                .childImageSharp.fixed.src
            }
            date={i.node.atime}
          />
        ))}
      </Container>
    </>
  )
}
export default IndexPage
