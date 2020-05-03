import React from "react"
import { Box, Typography, Button, Link } from "@material-ui/core"
import { FacebookMessenger } from "mdi-material-ui"
import { Email } from "@material-ui/icons"
import SidebarSectionTitle from "./SidebarSectionTitle"

const SidebarChatNow = () => {
  return (
    <Box>
      <SidebarSectionTitle title="Send a message" />
      <Typography variant="caption">Contact us now via...</Typography>
      <Box>
        <Button fullWidth startIcon={<FacebookMessenger />}>
          Messenger
        </Button>
        <Button fullWidth startIcon={<Email />}>
          Email
        </Button>
      </Box>
      <Typography variant="caption">
        If you want to report an abandoned or lost dog, please{" "}
        <Link>click here</Link> to read more before contacting us. Thank you.
      </Typography>
    </Box>
  )
}

export default SidebarChatNow
