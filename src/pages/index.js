import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {
  Paper,
  Dialog,
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
      <Container>
        <Grid container>
          <Grid item xs={12} sm={8} md={9}>
            <Box mb={2} align="center" width="100%">
              <Img
                fluid={data.logo.childImageSharp.fluid}
                style={{
                  maxWidth: 205,
                  margin: "auto",
                }}
              />
            </Box>
            <Typography></Typography>
          </Grid>
          <Grid item xs={0} sm={4} md={3}>
            <List>
              <ListItem>
                <ListItemText></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText></ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}
export default IndexPage
