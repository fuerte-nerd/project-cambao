import React from "react"
import { useTheme, useMediaQuery, Grid } from "@material-ui/core"
import Img from "gatsby-image"

import { graphql, useStaticQuery } from "gatsby"

const DogProfilePhotoGallery = () => {
  const theme = useTheme()
  const smUp = useMediaQuery(theme.breakpoints.up("sm"))
  const data = useStaticQuery(graphql`
    {
      dog1: file(name: { eq: "test" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 425, quality: 35) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thumb: file(name: { eq: "test" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 100, quality: 15) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <Img fluid={data.dog1.childImageSharp.fluid} />
      <Grid container spacing={smUp ? 1 : 0}>
        <Grid item xs={3} sm={2} md={3} lg={2}>
          <Img fluid={data.thumb.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={3} sm={2} md={3} lg={2}>
          <Img fluid={data.thumb.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={3} sm={2} md={3} lg={2}>
          <Img fluid={data.thumb.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={3} sm={2} md={3} lg={2}>
          <Img fluid={data.thumb.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={3} sm={2} md={3} lg={2}>
          <Img fluid={data.thumb.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={3} sm={2} md={3} lg={2}>
          <Img fluid={data.thumb.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={3} sm={2} md={3} lg={2}>
          <Img fluid={data.thumb.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={3} sm={2} md={3} lg={2}>
          <Img fluid={data.thumb.childImageSharp.fluid} />
        </Grid>
      </Grid>
    </>
  )
}

export default DogProfilePhotoGallery
