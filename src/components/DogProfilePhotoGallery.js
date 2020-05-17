import React from "react"
import { connect } from "react-redux"
import Img from "gatsby-image"

import DogProfileExpansionPanel from "./DogProfileExpansionPanel"
import DogProfilePhotoGalleryThumbs from "./DogProfilePhotoGalleryThumbs"

const DogProfilePhotoGallery = props => {
  const text = {
    title: {
      en: "Photo gallery",
      es: "Galería de fotos",
    },
  }
  return (
    <>
      <Img fluid={props.mainImage.childImageSharp.fluid} />
      <DogProfileExpansionPanel
        title={text.title[props.lang]}
        headingVariant="body2"
        expanded
        style={{ margin: 0 }}
      >
        <DogProfilePhotoGalleryThumbs images={props.images} />
      </DogProfileExpansionPanel>
    </>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(DogProfilePhotoGallery)
