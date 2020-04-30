import React from "react"
import { Box, Typography } from "@material-ui/core"

const Footer = () => {
  return (
    <Box mt={2} align="center">
      <Typography display="block" variant="caption">
        Registered Charity in the Canary Islands since April 2013
        (G1/S1/19399-13/F)
      </Typography>
      <Typography display="block" variant="caption">
        All content &copy; 2020
        {new Date().getFullYear() === 2020
          ? ` `
          : ` - ${new Date().getFullYear()}`}{" "}
        Fuerteventura Dog Rescue
      </Typography>
      <Typography display="block" variant="caption">
        Site by dandroos
      </Typography>
    </Box>
  )
}

export default Footer
