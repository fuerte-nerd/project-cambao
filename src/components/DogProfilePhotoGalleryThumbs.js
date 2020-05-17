import React from "react"
import { useTheme, useMediaQuery, Grid } from "@material-ui/core"
import Img from "gatsby-image"

const DogProfilePhotoGalleryThumbs = props => {
  const theme = useTheme()
  const smUp = useMediaQuery(theme.breakpoints.up("sm"))
  return (
    <Grid container spacing={smUp ? 1 : 0}>
      {props.images.map(img => (
        <Grid item xs={3} sm={2} md={3} lg={2}>
          <Img fluid={img.childImageSharp.fluid} />
        </Grid>
      ))}
    </Grid>
  )
}

export default DogProfilePhotoGalleryThumbs
