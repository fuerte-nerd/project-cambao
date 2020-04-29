import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {
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
          fluid(maxWidth: 2000, maxHeight: 2000, quality: 15) {
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
          <Grid item xs={12} sm={10} md={9}>
            <Box my={2} align="center" width="100%">
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
          <Hidden xsDown>
            <Grid item xs={0} sm={2} md={3}>
              <List>
                <ListSubheader>Site Updates</ListSubheader>
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
          </Hidden>
        </Grid>
      </Container>
    </Layout>
  )
}
export default IndexPage
