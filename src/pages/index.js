import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {
  useMediaQuery,
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
  useTheme,
} from "@material-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const theme = useTheme()
  const isNotMobile = useMediaQuery(theme.breakpoints.up("sm"))
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
      <Box m={isNotMobile ? 3 : 1}>
        <Box mb={2} align="center" width="100%">
          <Img
            fluid={data.logo.childImageSharp.fluid}
            style={{
              width: "100%",
              maxWidth: 105,
            }}
          />
        </Box>
        <Box>
          <Typography variant="h3" align="center" paragraph>
            We are their voice!
          </Typography>
        </Box>
        <Card>
          <CardActionArea>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={5} md={4} lg={3}>
                  <Img fluid={data.dog1.childImageSharp.fluid} />
                </Grid>
                <Grid item xs={12} sm={7} md={8} lg={9}>
                  <Typography variant="h3">Post title</Typography>
                  <Typography variant="overline">27 April 2020</Typography>
                  <Box mb={2}>
                    <Divider />
                  </Box>

                  <Typography align="justify" paragraph>
                    Lorem possimus non perspiciatis quibusdam iste. Numquam
                    veritatis consequatur velit ea ad quia? Deleniti autem
                    dolorum consequatur labore natus. Obcaecati assumenda
                    debitis quas accusantium temporibus animi! Facilis molestias
                    ab necessitatibus similique itaque Exercitationem assumenda
                    nemo.
                  </Typography>
                  <Divider variant="middle" />
                  <Box mt={2} align="center">
                    <Button variant="outlined" color="secondary">
                      Read more
                    </Button>
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
