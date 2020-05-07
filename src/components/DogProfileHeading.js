import React from "react"
import { Box, Typography, IconButton } from "@material-ui/core"
import { MoreVert, Share } from "@material-ui/icons"

const DogProfileHeading = props => {
  return props.mobile ? (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="white"
      p={1}
    >
      <Box color="primary.dark">
        <Typography variant="h2">Timanfaya</Typography>
      </Box>
      <Box>
        <IconButton edge="end">
          <MoreVert />
        </IconButton>
      </Box>
    </Box>
  ) : (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box color="white">
        <Typography variant="h2">Timanfaya</Typography>
      </Box>
      <Box>
        <IconButton edge="start">
          <Share />
        </IconButton>
        <IconButton edge="end">
          <MoreVert />
        </IconButton>
      </Box>
    </Box>
  )
}

export default DogProfileHeading
