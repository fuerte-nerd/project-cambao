import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { setMainImage } from "../redux/actions"
import Img from "gatsby-image"
import { Box, IconButton } from "@material-ui/core"
import { ZoomIn } from "@material-ui/icons"
import DogProfileExpansionPanel from "./DogProfileExpansionPanel"
import DogProfilePhotoGalleryThumbs from "./DogProfilePhotoGalleryThumbs"

const DogProfilePhotoGallery = props => {
  const [currentImage, setCurrentImage] = useState(null)
  const text = {
    title: {
      en: "Photo gallery",
      es: "Galería de fotos",
    },
  }
  useEffect(() => {
    props.dispatch(setMainImage(props.images.full[0].childImageSharp.id))
  }, [])

  useEffect(() => {
    for (let img in props.images.full) {
      if (props.images.full[img].childImageSharp.id === props.largeImage) {
        return setCurrentImage(props.images.full[img].childImageSharp)
      }
    }
  }, [props.largeImage])

  const handleClick = e => {
    console.log(currentImage)
    window.open(currentImage.fluid.src, "_blank")
  }

  return (
    <>
      {currentImage ? (
        <Box position="relative" color="white">
          <IconButton
            onClick={handleClick}
            color="inherit"
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              zIndex: 1000,
            }}
          >
            <ZoomIn style={{ fontSize: "4rem" }} />
          </IconButton>
          <Img fluid={currentImage.fluid} />
        </Box>
      ) : null}
      <DogProfileExpansionPanel
        title={text.title[props.lang]}
        headingVariant="body2"
        expanded
        style={{ margin: 0 }}
      >
        <DogProfilePhotoGalleryThumbs images={props.images.thumbs} />
      </DogProfileExpansionPanel>
    </>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
  largeImage: state.mainImage,
})

export default connect(mapStateToProps)(DogProfilePhotoGallery)
