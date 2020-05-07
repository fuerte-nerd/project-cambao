import React from "react"
import { Grid, Box, Typography, Divider } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Article = () => {
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
    <Box>
      <Grid container spacing={2} alignItems="flex-end">
        <Grid item xs={12} md={5}>
          <Img fluid={data.dog1.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={12} md={7}>
          <Box bgcolor="secondary.main" color="white">
            <Typography variant="h2">This is the article heading</Typography>
          </Box>
          <Box bgcolor="white">
            <Typography variant="subtitle1">12 April 2020</Typography>
            <Typography variant="subtitle2">Posted by FDR</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Article
