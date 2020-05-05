import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Box, Typography, Grid } from "@material-ui/core"
import Img from "gatsby-image"

const Dog = () => {
  const data = useStaticQuery(graphql`
    {
      dog1: file(name: { eq: "test" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 500, quality: 15) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h2">Buddy</Typography>
        </Grid>
        <Grid item>
          <Img fluid={data.dog1.childImageSharp.fluid} />
        </Grid>
        <Grid item>
          <Grid container></Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dog
