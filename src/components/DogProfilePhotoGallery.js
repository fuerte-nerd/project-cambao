import React from "react"
import Img from "gatsby-image"

import DogProfileExpansionPanel from "./DogProfileExpansionPanel"
import DogProfilePhotoGalleryThumbs from "./DogProfilePhotoGalleryThumbs"

import { graphql, useStaticQuery } from "gatsby"

const DogProfilePhotoGallery = () => {
  const data = useStaticQuery(graphql`
    {
      dog1: file(name: { eq: "test" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 425, quality: 35) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <Img fluid={data.dog1.childImageSharp.fluid} />
      <DogProfileExpansionPanel
        title="Photo Gallery"
        headingVariant="body2"
        expanded
        style={{ margin: 0 }}
      >
        <DogProfilePhotoGalleryThumbs />
      </DogProfileExpansionPanel>
    </>
  )
}

export default DogProfilePhotoGallery
