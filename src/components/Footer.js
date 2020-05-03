import React from "react"
import { Box, Typography, Container, Hidden } from "@material-ui/core"
import LocationMap from "./LocationMap"

const Footer = () => {
  return (
    <Box m={2} pt={2} width="100%" align="center" boxShadow={3}>
      <Box mb={2}>
        <Typography variant="h4" paragraph>
          Where are we?
        </Typography>
        <LocationMap />
      </Box>
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
