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
            <Img
              fluid={data.file.childImageSharp.fluid}
              style={{ maxHeight: "100vh" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Container>
              <Paper>
                <Box>
                  <Typography>
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
