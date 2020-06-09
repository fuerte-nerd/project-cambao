import React from "react"
import { connect } from "react-redux"
import { setMainImage } from "../redux/actions"
import { useTheme, useMediaQuery, Grid, Box } from "@material-ui/core"
import Img from "gatsby-image"

const DogProfilePhotoGalleryThumbs = props => {
  const theme = useTheme()
  const smUp = useMediaQuery(theme.breakpoints.up("sm"))

  const handleClick = e => {
    props.dispatch(setMainImage(e.currentTarget.id))
  }
  return (
    <Grid container spacing={smUp ? 1 : 0}>
      {props.images.map((img, ind) => (
        <Grid item key={`${ind}-grid`} xs={3} sm={2} md={3} lg={2}>
          <Box
            onClick={handleClick}
            id={img.childImageSharp.id}
            style={{ cursor: "pointer" }}
          >
            <Img
              id={img.childImageSharp.id}
              fluid={img.childImageSharp.fluid}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default connect()(DogProfilePhotoGalleryThumbs)
