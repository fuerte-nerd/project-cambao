import React from "react"
import { connect } from "react-redux"
import { Box } from "@material-ui/core"

import SidebarSectionTitle from "./SidebarSectionTitle"
import LocationMap from "./LocationMap"

const SidebarLocation = props => {
  const text = {
    location: {
      en: "Location",
      es: "Ubicación",
    },
  }
  return (
    <Box pb={2}>
      <SidebarSectionTitle title={text.location[props.lang]} />
      <LocationMap />
    </Box>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(SidebarLocation)
