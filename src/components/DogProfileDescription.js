import React from "react"
import { connect } from "react-redux"
import { Typography } from "@material-ui/core"

import DogProfileExpansionPanel from "./DogProfileExpansionPanel"

const DogProfileDescription = props => {
  const text = {
    title: { en: "Description", es: "Descripción" },
  }
  return (
    <DogProfileExpansionPanel
      title={text.title[props.lang]}
      headingVariant="h6"
      expanded
      expandOnMobile
    >
      <Typography
        dangerouslySetInnerHTML={{ __html: props.description }}
        variant="subtitle1"
        align="justify"
      ></Typography>
    </DogProfileExpansionPanel>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(DogProfileDescription)
