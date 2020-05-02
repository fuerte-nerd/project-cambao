import React from "react"

import SidebarSectionTitle from "./SidebarSectionTitle"
import LocationMap from "./LocationMap"

const SidebarLocation = () => {
  return (
    <>
      <SidebarSectionTitle title="Location" />
      <LocationMap />
    </>
  )
}

export default SidebarLocation
