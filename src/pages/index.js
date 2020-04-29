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
} from "@material-ui/core"

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
      <Box bgcolor="secondary.main" maxWidth="100vw" minHeight="100vh">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}></Grid>

          <Grid item xs={12} md={6}>
            <Container>
              <Box>
                <Typography align="justify">
                  Sit libero saepe quis autem dolorem dolore Quaerat velit atque
                  esse itaque assumenda A saepe architecto repudiandae amet
                  doloribus Quis earum quae odio nemo debitis? Harum quidem non
                  vero assumenda at quo, mollitia. Voluptas voluptatum
                  laudantium repellendus delectus delectus. Quas eaque
                  dignissimos in earum magni Odit sequi sint similique ullam.
                </Typography>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}
export default IndexPage
