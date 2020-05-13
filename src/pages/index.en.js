import React, { useEffect } from "react"
import { getUserLocales } from "get-user-locale"
import { connect } from "react-redux"
import { setLanguage } from "../redux/actions"
import { graphql, useStaticQuery, navigate } from "gatsby"
import { Container } from "@material-ui/core"
import SEO from "../components/seo"
import Heading from "../components/index/Heading"
import ArticleCard from "../components/index/ArticleCard"

const IndexPage = props => {
  useEffect(() => {
    const locales = getUserLocales()
    for (let locale in locales) {
      locale = locale.substr(0, 2)
      if (locale !== "en") {
        data.languages.siteMetadata.supportedLanguages.filter(lang => {
          if (lang === locale) {
            navigate(`/${lang}/`)
          }
        })
      }
    }

    if (props.siteLang !== "en") {
      props.dispatch(setLanguage("en"))
    }
  }, [])
  const data = useStaticQuery(graphql`
    {
      languages: site {
        siteMetadata {
          supportedLanguages
        }
      }
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
  return (
    <>
      <SEO title="Home" />
      <Heading
        heading={data.site_content.childMarkdownRemark.frontmatter.heading.en}
        subheading={
          data.site_content.childMarkdownRemark.frontmatter.subheading.en
        }
      />
      <Container>
        {data.articles.edges.map(i => (
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

const mapStateToProps = state => ({
  siteLang: state.siteLang,
})

export default connect(mapStateToProps)(IndexPage)
