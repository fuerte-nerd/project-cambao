import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "@material-ui/core"
import SEO from "../components/seo"
import Heading from "../components/index/Heading"
import ArticleCard from "../components/index/ArticleCard"

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
              frontmatter {
                content_es {
                  title_es
                  body_es
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
              es
            }
            subheading {
              es
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title="Home" />
      <Heading
        heading={data.site_content.childMarkdownRemark.frontmatter.heading.es}
        subheading={
          data.site_content.childMarkdownRemark.frontmatter.subheading.es
        }
      />
      <Container>
        {data.articles.edges.map(i => (
          <ArticleCard
            title={i.node.childMarkdownRemark.frontmatter.content_es.title_es}
            body={i.node.childMarkdownRemark.frontmatter.content_es.body_es}
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
