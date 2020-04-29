import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Paper,
  Box,
  Grid,
  Typography,
  Button,
  Container,
} from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "test" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Box
        bgcolor="secondary.main"
        minWidth="100vw"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            <BackgroundImage
              fluid={data.file.childImageSharp.fluid}
              style={{ height: "100vh", overflow: "hidden" }}
            ></BackgroundImage>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper>
              <Box>
                <Typography>Hello</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}
export default IndexPage
