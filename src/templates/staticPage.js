import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setLanguage, setRedirect } from "../redux/actions"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Box, Typography, Grid } from "@material-ui/core"
import Head from "../components/head"

const StaticPage = props => {
  const { language, pageName, redirectUrl } = props.pageContext

  useEffect(() => {
    props.dispatch(setLanguage(language))
    props.dispatch(setRedirect(redirectUrl))
  }, [])

  const text = {
    heading: {
      whoAreWe: {
        en: "Who are we?",
        es: "¿Quiénes somos?",
      },
      adopt: {
        en: "Adopt a dog",
        es: "Adopte un perro",
      },
      foster: {
        en: "Foster a dog",
        es: "Acojas un perro",
      },
      donate: {
        en: "Donate to the dogs",
        es: "Donar a los perros",
      },
      volunteer: {
        en: "Volunteer your time",
        es: "Sea voluntario",
      },
    },
  }

  return (
    <>
      <Head
        lang={language}
        title={text.heading[pageName][language]}
        description="temp"
      />

      <Container>
        <Box color="white">
          <Typography variant="h2">
            {text.heading[pageName][language]}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Img
              fluid={
                props.data.markdownRemark.frontmatter.image.childImageSharp
                  .fluid
              }
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              dangerouslySetInnerHTML={{
                __html: props.data.markdownRemark.frontmatter[language],
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        en
        es
      }
    }
  }
`

export default connect()(StaticPage)
