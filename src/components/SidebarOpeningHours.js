import React from "react"
import { Typography, Box } from "@material-ui/core"
import SidebarSectionTitle from "./SidebarSectionTitle"

const SidebarOpeningHours = () => {
  return (
    <Box>
      <SidebarSectionTitle title="Opening hours" />
      <Typography display="block">Thu 8-9:30</Typography>
      <Typography display="block">Sat 9-10:30</Typography>
      <Typography display="block">Sun 9-10:30</Typography>
    </Box>
  )
}

export default SidebarOpeningHours
