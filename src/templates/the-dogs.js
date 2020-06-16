import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { connect } from "react-redux"
import { setLanguage, setRedirect } from "../redux/actions"
import { Container, Box, Typography, Grid } from "@material-ui/core"

import Head from "../components/head"
import DogListing from "../components/DogListing"
import text from "../components/text"

const TheDogs = props => {
  const { language } = props.pageContext
  useEffect(() => {
    props.dispatch(setLanguage(language))
    props.dispatch(setRedirect("/the-dogs"))
    // eslint-disable-next-line
  }, [])
  const dogs = props.data.dogs.edges
    .map(i => {
      const dog = i.node.childMarkdownRemark.frontmatter
      return {
        name: dog.title,
        image: dog.main_image.childImageSharp.fixed.src,
        summary: dog.summary[language],
        slug: i.node.childMarkdownRemark.fields.slug,
        key: i.node.childMarkdownRemark.id,
        date_entered: dog.date_entered,
      }
    })
    .sort((a, b) => {
      return new Date(a.date_entered) - new Date(b.date_entered)
    })

  return (
    <>
      <Head
        lang={language}
        title={text.theDogsHeading[language]}
        description={text.theDogsSubheading[language]}
      />
      {props.siteReady ? (
        <Container>
          <Box color="white">
            <Typography variant="h2">
              {text.theDogsHeading[language]}
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography variant="subtitle1">
              {text.theDogsSubheading[language]}
            </Typography>
          </Box>
          <Box>
            <Grid container spacing={2}>
              {dogs.map(dog => (
                <Grid
                  key={`${dog.key}-grid`}
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={4}
                  xl={3}
                >
                  <DogListing
                    key={dog.key}
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
      ) : null}
    </>
  )
}

const mapStateToProps = state => ({
  siteReady: state.siteReady,
  lang: state.siteLang,
})
export const data = graphql`
  query DogsQuery {
    dogs: allFile(
      filter: { sourceInstanceName: { eq: "dogs" }, extension: { eq: "md" } }
      sort: {
        fields: childMarkdownRemark___frontmatter___date_entered
        order: ASC
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            id
            frontmatter {
              title
              date_entered
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
                de
                fr
                it
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
