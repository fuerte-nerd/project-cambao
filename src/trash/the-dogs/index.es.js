import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import { setRedirect, setLanguage } from "../../redux/actions"

import TheDogsTemplate from "../../templates/the-dogs"

const TheDogs = props => {
  props.dispatch(setLanguage("es"))
  props.dispatch(setRedirect("the-dogs"))
  const data = useStaticQuery(graphql`
    {
      heading: file(
        sourceInstanceName: { eq: "static_content" }
        name: { eq: "menus" }
      ) {
        childMarkdownRemark {
          frontmatter {
            the_dogs {
              es
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
                  es
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
      summary: dog.summary.es,
      slug: i.node.childMarkdownRemark.fields.slug,
    }
  })
  return (
    <TheDogsTemplate
      lang="es"
      seo_title="Los Perros"
      heading="Los Perros"
      subheading="Tenemos un montón de perros esperando su hogar para siempre.  ¡Vengan a conocerlos!  No pueden esperar a conocerte."
      dogs={dogs}
    />
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})
export default connect(mapStateToProps)(TheDogs)
