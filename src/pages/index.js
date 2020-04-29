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

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      dog1: file(name: { eq: "test" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 600) {
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
      <Box
        bgcolor="secondary.main"
        display="flex"
        alignItems="center"
        justifyContent="center"
        maxWidth="100%"
        minHeight="100vh"
      >
        <Container>
          <Paper>
            <Grid container alignItems="center">
              <Grid item xs={12} md={6}>
                <Container>
                  <Box p={4}>
                    <Box mb={2} align="center">
                      <Img
                        fluid={data.logo.childImageSharp.fluid}
                        style={{
                          maxWidth: 205,
                          margin: "auto",
                        }}
                      />
                    </Box>
                    <Typography variant="subtitle1" align="justify">
                      Sit libero saepe quis autem dolorem dolore Quaerat velit
                      atque esse itaque assumenda A saepe architecto repudiandae
                      amet doloribus Quis earum quae odio nemo debitis? Harum
                      quidem non vero assumenda at quo, mollitia. Voluptas
                      voluptatum laudantium repellendus delectus delectus. Quas
                      eaque dignissimos in earum magni Odit sequi sint similique
                      ullam.
                    </Typography>
                  </Box>
                </Container>
              </Grid>
              <Grid item xs={12} md={6}>
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
          </Paper>
        </Container>
      </Box>
    </Layout>
  )
}
export default IndexPage
