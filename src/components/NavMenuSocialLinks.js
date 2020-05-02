import React from "react"
import { Box } from "@material-ui/core"

const NavMenuSocialLinks = () => {
  return (
    <Box>
      <Tooltip title="Visit us on Facebook!">
        <IconButton color="inherit">
          <Facebook className={classes.socialButton} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Visit us on Instagram!">
        <IconButton edge="end" color="inherit">
          <Instagram className={classes.socialButton} />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default NavMenuSocialLinks
