import React from "react"
import { Box, Typography, IconButton } from "@material-ui/core"
import { Share, Facebook, WhatsApp, Email, Face } from "@material-ui/icons"

const DogProfileHeading = props => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box color="white">
        <Typography variant="h2">Timanfaya</Typography>
      </Box>
      <Box>
        {props.mobile ? (
          <IconButton edge="start">
            <Share />
          </IconButton>
        ) : (
          <>
            <IconButton>
              <Facebook />
            </IconButton>
            <IconButton>
              <WhatsApp />
            </IconButton>
            <IconButton>
              <Email />
            </IconButton>
          </>
        )}
      </Box>
    </Box>
  )
}

export default DogProfileHeading
