import React from "react"

import { Grid, Box, Container } from "@material-ui/core"

import SidebarQuickLinks from "./SidebarQuickLinks"
import SidebarLocation from "./SidebarLocation"

const Sidebar = () => {
  return (
    <Grid item xs={0} md={2}>
      <Box py={2} bgcolor="primary.light" boxShadow={2}>
        <Container>
          <SidebarQuickLinks />
          <SidebarLocation />
        </Container>
      </Box>
    </Grid>
  )
}

export default Sidebar
