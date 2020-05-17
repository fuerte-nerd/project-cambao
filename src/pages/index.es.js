import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setLanguage } from "../redux/actions"
import { graphql, useStaticQuery } from "gatsby"
import IndexTemplate from "../templates/index"

const IndexPage = props => {
  useEffect(() => {
    props.dispatch(setLanguage("es"))
  }, [])
  const data = useStaticQuery(graphql`
    {
      articles: allFile(
        filter: {
          sourceInstanceName: { eq: "articles" }
          extension: { eq: "md" }
          childMarkdownRemark: { frontmatter: { language: { eq: "es" } } }
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
