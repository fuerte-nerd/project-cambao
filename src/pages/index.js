import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "@material-ui/core"
import SEO from "../components/seo"
import Heading from "../components/index/Heading"
import ArticleCard from "../components/index/ArticleCard"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      articles_images: allFile(
        filter: { sourceInstanceName: { eq: "articles_images" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 845) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      articles: allFile(filter: { sourceInstanceName: { eq: "articles" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                date
                content_de {
                  body_de
                  title_de
                }
                content_en {
                  title_en
                  body_en
                }
                content_es {
                  body_es
                  title_es
                }
                content_fr {
                  body_fr
                  title_fr
                }
                content_it {
                  title_it
                  body_it
                }
                featured_image
                tags
                title
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title="Home" />
      <Heading />
      <Container>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </Container>
    </>
  )
}
export default IndexPage
