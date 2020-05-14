import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setLanguage } from "../redux/actions"
import { graphql, useStaticQuery } from "gatsby"
import IndexTemplate from "../templates/index"

const IndexPage = props => {
  useEffect(() => {
    if (props.siteLang !== "es") {
      props.dispatch(setLanguage("es"))
    }
  }, [])
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
                  es
                }
                post_body {
                  es
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
      link: file(
        sourceInstanceName: { eq: "static_content" }
        name: { eq: "menus" }
      ) {
        childMarkdownRemark {
          frontmatter {
            home {
              es
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
      title: article.post_title.es,
      body: article.post_body.es,
      image: article.featured_image.childImageSharp.fixed.src,
      date: i.node.atime,
      slug: i.node.childMarkdownRemark.fields.slug,
    }
  })
  return (
    <IndexTemplate
      seo_title={data.link.childMarkdownRemark.frontmatter.home.es}
      heading={static_content.heading.es}
      subheading={static_content.subheading.es}
      articles={articles}
    />
  )
}

const mapStateToProps = state => ({
  siteLang: state.siteLang,
})

export default connect(mapStateToProps)(IndexPage)
