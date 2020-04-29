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
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(name: { eq: "logo" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
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
        <Grid container alignItems="center">
          <Grid item xs={12} md={6}>
            <Box align="center">
              <GridList
                cellHeight="auto"
                cols={2}
                style={{ maxWidth: 650, overflow: "hidden", margin: "auto" }}
              >
                <GridListTile cols={2}>
                  <Img
                    fluid={data.logo.childImageSharp.fluid}
                    style={{ margin: 10 }}
                  />
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

          <Grid item xs={12} md={6}>
            <Container>
              <Paper>
                <Box p={4}>
                  <Typography align="justify">
                    Sit libero saepe quis autem dolorem dolore Quaerat velit
                    atque esse itaque assumenda A saepe architecto repudiandae
                    amet doloribus Quis earum quae odio nemo debitis? Harum
                    quidem non vero assumenda at quo, mollitia. Voluptas
                    voluptatum laudantium repellendus delectus delectus. Quas
                    eaque dignissimos in earum magni Odit sequi sint similique
                    ullam.
                  </Typography>
                </Box>
              </Paper>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}
export default IndexPage
