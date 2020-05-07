import React from "react"
import { Grid } from "@material-ui/core"
import Img from "gatsby-image"

const DogProfilePhotoGallery = () => {
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

export default DogProfilePhotoGallery
