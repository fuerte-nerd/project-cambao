import React from "react"
import { connect } from "react-redux"
import { Box } from "@material-ui/core"

import SidebarSectionTitle from "./SidebarSectionTitle"
import LocationMap from "./LocationMap"
import text from "./text"

const SidebarLocation = props => {
  return (
    <Box pb={2}>
      <SidebarSectionTitle title={text.locationHeading[props.lang]} />
      <LocationMap />
    </Box>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(SidebarLocation)
