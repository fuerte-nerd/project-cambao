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
                  <Divider />
                  <Typography>
                    Lorem possimus non perspiciatis quibusdam iste. Numquam
                    veritatis consequatur velit ea ad quia? Deleniti autem
                    dolorum consequatur labore natus. Obcaecati assumenda
                    debitis quas accusantium temporibus animi! Facilis molestias
                    ab necessitatibus similique itaque Exercitationem assumenda
                    nemo.
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
