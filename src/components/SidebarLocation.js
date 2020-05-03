import React from "react"
import { Box } from "@material-ui/core"

import SidebarSectionTitle from "./SidebarSectionTitle"
import LocationMap from "./LocationMap"

const SidebarLocation = () => {
  return (
    <Box pb={2}>
      <SidebarSectionTitle title="Location" />
      <LocationMap />
    </Box>
  )
}

export default SidebarLocation
