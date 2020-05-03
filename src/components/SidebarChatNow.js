import React from "react"
import { Box, Typography, Button } from "@material-ui/core"
import SidebarSectionTitle from "./SidebarSectionTitle"

const SidebarChatNow = () => {
  return (
    <Box>
      <SidebarSectionTitle title="Send a message" />
      <Typography variant="caption">If you need to get in touch...</Typography>
    </Box>
  )
}

export default SidebarChatNow
