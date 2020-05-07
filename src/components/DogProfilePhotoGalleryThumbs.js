import React from "react"
import { useTheme, useMediaQuery, Grid } from "@material-ui/core"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const DogProfilePhotoGalleryThumbs = () => {
  const theme = useTheme()
  const smUp = useMediaQuery(theme.breakpoints.up("sm"))
  const data = useStaticQuery(graphql`
    {
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
  )
}

export default DogProfilePhotoGalleryThumbs
