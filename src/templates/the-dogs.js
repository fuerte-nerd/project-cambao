import React from "react"
import { graphql } from "gatsby"
import { connect } from "react-redux"
import { setLanguage, setRedirect } from "../redux/actions"
import { Container, Box, Typography, Grid } from "@material-ui/core"

import Head from "../components/head"
import DogListing from "../components/DogListing"
import text from "../components/text"

const TheDogs = props => {
  const { language } = props.pageContext
  props.dispatch(setLanguage(language))
  props.dispatch(setRedirect("/the-dogs"))
  const dogs = props.data.dogs.edges.map(i => {
    const dog = i.node.childMarkdownRemark.frontmatter
    return {
      name: dog.name,
      image: dog.main_image.childImageSharp.fixed.src,
      summary: dog.summary[language],
      slug: i.node.childMarkdownRemark.fields.slug,
    }
  })

  return (
    <>
      <Head
        lang={language}
        title={text.theDogsHeading[language]}
        description={text.theDogsSubheading[language]}
      />
      <Container>
        <Box color="white">
          <Typography variant="h2">{text.theDogsHeading[language]}</Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="subtitle1">
            {text.theDogsSubheading[language]}
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={1}>
            {dogs.map(dog => (
              <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
                <DogListing
                  name={dog.name}
                  image={dog.image}
                  summary={dog.summary}
                  slug={dog.slug}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})
export const data = graphql`
  query DogsQuery {
    heading: file(
      sourceInstanceName: { eq: "static_content" }
      name: { eq: "menus" }
    ) {
      childMarkdownRemark {
        frontmatter {
          the_dogs {
            en
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
                en
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
`
export default connect(mapStateToProps)(TheDogs)
