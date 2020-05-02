import React, { useState } from "react"

import {
  Grid,
  Box,
  Container,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@material-ui/core"

import LocationMap from "./LocationMap"
import SidebarQuickLinks from "./SidebarQuickLinks"

const Sidebar = () => {
  return (
    <Grid item xs={0} md={2}>
      <Box py={2} bgcolor="primary.light" boxShadow={2}>
        <Container>
          <SidebarQuickLinks />
          <Box pt={2} pb={1}>
            <Typography variant="overline">Location</Typography>
            <Divider />
          </Box>
          <LocationMap />
        </Container>
      </Box>
    </Grid>
  )
}

export default Sidebar
