import React from "react"
import { Grid, Box, Typography } from "@material-ui/core"
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
    <Box bgcolor="white">
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Img fluid={data.dog1.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant="h2">This is the article heading</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Article
