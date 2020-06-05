import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setLanguage, setRedirect } from "../redux/actions"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Box, Typography, Grid } from "@material-ui/core"
import Head from "../components/head"
import text from "../components/text"

const StaticPage = props => {
  const { language, pageName, redirectUrl } = props.pageContext
  const heading = `${pageName}Heading`
  const body = props.data.markdownRemark.frontmatter[language]
  useEffect(() => {
    props.dispatch(setLanguage(language))
    props.dispatch(setRedirect(redirectUrl))
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Head
        lang={language}
        title={text[heading][language]}
        description={`${body.split(" ", 25).join(" ")}...`}
      />

      <Container>
        <Box color="white">
          <Typography variant="h2">{text[heading][language]}</Typography>
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
                __html: body,
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
