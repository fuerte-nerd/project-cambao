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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2">Buddy</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Img fluid={data.dog1.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2} bgcolor="#fafafa">
            <Grid container>
              <Grid item xs={6}>
                <Typography>Age</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>11 months</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dog
