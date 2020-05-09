import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Box,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  Button,
  Divider,
} from "@material-ui/core"
import Img from "gatsby-image"

const ArticleCard = () => {
  const data = useStaticQuery(graphql`
    {
      dog1: file(name: { eq: "test" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 400, quality: 15) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Box mb={1}>
      <Card>
        <CardActionArea>
          <CardMedia image={data.dog1.childImageSharp.fluid} />
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
                  veritatis consequatur velit ea ad quia? Deleniti autem dolorum
                  consequatur labore natus. Obcaecati assumenda debitis quas
                  accusantium temporibus animi! Facilis molestias ab
                  necessitatibus similique itaque Exercitationem assumenda nemo.
                </Typography>
                <Box align="right" width="100%">
                  <Button variant="contained" color="secondary">
                    Read more
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  )
}

export default ArticleCard
