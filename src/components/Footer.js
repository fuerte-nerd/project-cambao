import React from "react"
import { ListItemText, Grid, Box, Typography } from "@material-ui/core"
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
        <Box pb={4}>
          <Typography variant="h4" paragraph>
            Where are we?
          </Typography>
          <LocationMap />
          <Box mt={2}>
            <Typography display="block">Fuerteventura Dog Rescue</Typography>
            <Typography display="block">Ayuntamiento de La Oliva</Typography>
            <Typography display="block">Calle Juan Cabrera Méndez</Typography>
            <Typography display="block">La Oliva</Typography>
            <Typography display="block">Fuerteventura</Typography>
            <Typography display="block">Spain</Typography>
          </Box>
        </Box>

        <Box pb={4}>
          <Typography variant="h4" paragraph>
            Opening Hours
          </Typography>
          <Grid container justify="space-between">
            <Grid item xs={12} sm={4}>
              <ListItemText
                primary="Thursdays"
                secondary="8:00 - 9:30"
                primaryTypographyProps={{ style: { textAlign: "center" } }}
                secondaryTypographyProps={{
                  style: { textAlign: "center" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ListItemText
                primary="Weekends"
                secondary="9:00 - 10:30"
                primaryTypographyProps={{ style: { textAlign: "center" } }}
                secondaryTypographyProps={{
                  style: { textAlign: "center" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ListItemText
                primary="Holidays"
                secondary="9:00 - 10:30"
                primaryTypographyProps={{ style: { textAlign: "center" } }}
                secondaryTypographyProps={{
                  style: { textAlign: "center" },
                }}
              />
            </Grid>
          </Grid>
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
    </Box>
  )
}

export default Footer
