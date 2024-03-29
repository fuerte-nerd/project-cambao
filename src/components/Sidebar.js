import React from "react"

import { Grid, Box, Container } from "@material-ui/core"
import SidebarLanguage from "./SidebarLanguage"
import SidebarQuickLinks from "./SidebarQuickLinks"
import SidebarChatNow from "./SidebarChatNow"
import SidebarDonate from "./SidebarDonate"
import SidebarLocation from "./SidebarLocation"
import SidebarOpeningHours from "./SidebarOpeningHours"

const Sidebar = () => {
  return (
    <Grid item xs={false} md={2}>
      <Box py={2} bgcolor="primary.light" boxShadow={2}>
        <Container>
          <SidebarQuickLinks />
          <SidebarLanguage />
          <SidebarChatNow />
          <SidebarDonate />
          <SidebarLocation />
          <SidebarOpeningHours />
        </Container>
      </Box>
    </Grid>
  )
}

export default Sidebar
