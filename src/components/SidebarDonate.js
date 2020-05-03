import React from "react"
import { Box, Typography, Button } from "@material-ui/core"
import { EuroSymbol } from "@material-ui/icons"
import SidebarSectionTitle from "./SidebarSectionTitle"

const SidebarDonate = () => {
  return (
    <Box>
      <SidebarSectionTitle title="Donate" />
      <Box pb={2}>
        <Typography variant="caption">
          We are a volunteer organization and appreciate anything you can
          spare...
        </Typography>
        <Box mt={2}>
          <Button
            variant="contained"
            fullWidth
            color="secondary"
            startIcon={<EuroSymbol />}
          >
            Make a donation
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SidebarDonate
