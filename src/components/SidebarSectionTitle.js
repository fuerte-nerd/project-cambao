import React from "react"
import { Box, Typography, Divider } from "@material-ui/core"

const SidebarSectionTitle = props => {
  return (
    <Box pb={1}>
      <Typography variant="overline">{props.title}</Typography>
      <Divider />
    </Box>
  )
}

export default SidebarSectionTitle
