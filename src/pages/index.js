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
          fluid(maxWidth: 500, maxHeight: 400, quality: 15) {
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
      <Box m={1}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                  <Img fluid={data.dog1.childImageSharp.fluid} />
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Typography variant="h3">Post title</Typography>
                  <Typography variant="overline">27 April 2020</Typography>
                  <Typography>
                    Consectetur laborum incidunt dolore maiores architecto Quis
                    molestias ipsa mollitia eveniet dignissimos Numquam commodi
                    quod quaerat quo fugit. Itaque fugit alias reiciendis facere
                    voluptates? Odit perspiciatis labore velit autem aut, est
                    Vel cumque excepturi molestias omnis est? Cum quisquam sint
                    esse officia labore odit. Saepe eaque atque veniam
                    repellendus ratione
                  </Typography>
                  <Box align="end">
                    {" "}
                    <Button color="secondary">Read more</Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Layout>
  )
}
export default IndexPage
