import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import { setLanguage } from "../../redux/actions"

import TheDogsTemplate from "../../templates/the-dogs"

const TheDogs = props => {
  props.dispatch(setLanguage("en"))
  const data = useStaticQuery(graphql`
    {
      heading: file(
        sourceInstanceName: { eq: "static_content" }
        name: { eq: "menus" }
      ) {
        childMarkdownRemark {
          frontmatter {
            the_dogs {
              en
            }
          }
        }
      }
      dogs: allFile(
        filter: { sourceInstanceName: { eq: "dogs" }, extension: { eq: "md" } }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                name
                main_image {
                  childImageSharp {
                    fixed(width: 845) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
                summary {
                  en
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)
  const dogs = data.dogs.edges.map(i => {
    const dog = i.node.childMarkdownRemark.frontmatter
    return {
      name: dog.name,
      image: dog.main_image.childImageSharp.fixed.src,
      summary: dog.summary.en,
      slug: i.node.childMarkdownRemark.fields.slug,
    }
  })
  return (
    <TheDogsTemplate
      lang="en"
      seo_title="The Dogs"
      heading="The Dogs"
      subheading="We have lots of dogs waiting for their forever home.  Come and meet them!  They can't wait to meet you!"
      dogs={dogs}
    />
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})
export default connect(mapStateToProps)(TheDogs)
