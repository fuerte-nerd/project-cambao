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
          fixed(width: 600, height: 300, quality: 15) {
            ...GatsbyImageSharpFixed
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
          <Card>
            <CardActionArea>
              <CardContent></CardContent>
              <CardMedia
                image={data.dog1.childImageSharp.fixed.src}
                height={140}
              />
            </CardActionArea>
          </Card>
        </Container>
      </Box>
    </Layout>
  )
}
export default IndexPage
