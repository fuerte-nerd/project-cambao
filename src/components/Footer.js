import React from "react"
import { Grid, Box, Typography, Container, Hidden } from "@material-ui/core"
import LocationMap from "./LocationMap"

const Footer = () => {
  return (
    <Box
      mt={2}
      py={4}
      bgcolor="secondary.main"
      color="#fafafa"
      align="center"
      boxShadow={6}
    >
      <Box p={2}>
        <Grid container>
          <Grid item xs={12}>
            <Box pb={2}>
              <Typography variant="h4" paragraph>
                Where are we?
              </Typography>
              <LocationMap />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" paragraph>
              Opening Hours
            </Typography>
            <Typography display="block" variant="subtitle2">
              Thursdays
            </Typography>
            <Typography display="block" variant="subtitle1">
              8:00 - 9:30
            </Typography>
          </Grid>
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
        </Grid>
      </Box>
    </Box>
  )
}

export default Footer
