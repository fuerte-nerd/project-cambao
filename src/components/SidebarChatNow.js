import React from "react"
import { Box, Typography, Button } from "@material-ui/core"
import { FacebookMessenger } from "mdi-material-ui"
import { Email } from "@material-ui/icons"
import SidebarSectionTitle from "./SidebarSectionTitle"

const SidebarChatNow = () => {
  return (
    <Box>
      <SidebarSectionTitle title="Send a message" />
      <Typography variant="caption">Contact us now via...</Typography>
      <Box>
        <Button startIcon={<FacebookMessenger />}>Messenger</Button>
        <Button startIcon={<Email />}>Email</Button>
      </Box>
    </Box>
  )
}

export default SidebarChatNow
