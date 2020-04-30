import React from "react"
import { Box, Typography } from "@material-ui/core"

const Footer = () => {
  return (
    <Box>
      <Typography variant="caption">
        All content &copy; 2020
        {Date().getCurrentYear() === 2020
          ? ` `
          : ` - ${Date().getCurrentYear()}`}{" "}
        Fuerteventura Dog Rescue
      </Typography>
    </Box>
  )
}

export default Footer
