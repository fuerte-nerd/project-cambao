import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {
  Paper,
  Box,
  Grid,
  Typography,
  Button,
  Container,
  GridList,
  GridListTile,
} from "@material-ui/core"

import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      dog1: file(name: { eq: "test" }) {
        childImageSharp {
          fluid(maxWidth: 2000, maxHeight: 2000, quality: 15) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dog2: file(name: { eq: "test" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(name: { eq: "logo" }) {
        childImageSharp {
          fluid(maxWidth: 205, maxHeight: 205) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage
        fluid={data.dog1.childImageSharp.fluid}
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <Paper>
            <Container>
              <Box align="center">
                <Box mb={2} align="center">
                  <Img
                    fluid={data.logo.childImageSharp.fluid}
                    style={{
                      maxWidth: 205,
                      margin: "auto",
                    }}
                  />
                </Box>
                <Typography variant="subtitle1">
                  Sit libero saepe quis autem dolorem dolore Quaerat velit atque
                  esse itaque assumenda A saepe architecto repudiandae amet
                </Typography>
              </Box>
            </Container>
          </Paper>
        </Container>
      </BackgroundImage>
      <Grid container alignItems="center">
        <Grid item xs={12} md={7}></Grid>
        <Grid item xs={12} md={5}>
          <Box align="center">
            <GridList
              cellHeight="auto"
              cols={2}
              style={{
                maxWidth: 650,
                overflow: "hidden",
                margin: "auto",
              }}
            >
              <GridListTile cols={2}>
                <Img fluid={data.dog2.childImageSharp.fluid} />
              </GridListTile>
              <GridListTile>
                <Img fluid={data.dog1.childImageSharp.fluid} />
              </GridListTile>
              <GridListTile>
                <Img fluid={data.dog1.childImageSharp.fluid} />
              </GridListTile>
            </GridList>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}
export default IndexPage
