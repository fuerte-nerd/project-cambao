import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
  Divider,
  Hidden,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Box,
  Grid,
  Typography,
  Container,
} from "@material-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      dog1: file(name: { eq: "test" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400, quality: 15) {
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
      <Box>
        <Container>
          <Box py={2} align="center" width="100%">
            <Img
              fluid={data.logo.childImageSharp.fluid}
              style={{
                maxWidth: 205,
              }}
            />
          </Box>
          <Typography variant="h2" align="center">
            Latest news
          </Typography>
          <Box>
            <Grid container>
              <Grid item xs={12} sm={3}>
                <Img fluid={data.dog1.childImageSharp.fluid} />
              </Grid>
              <Grid item xs={12} sm={9}>
                <Typography></Typography>
                <Typography></Typography>
                <Typography></Typography>
                <Button></Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}
export default IndexPage
