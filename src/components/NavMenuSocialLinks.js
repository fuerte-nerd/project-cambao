import React from "react"
import { makeStyles, Box } from "@material-ui/core"
import { Facebook, Instagram } from "@material-ui/icons"
import NavMenuSocialLinksItem from "./NavMenuSocialLinksItem"

const useStyles = makeStyles(theme => ({
  socialButton: {
    fontSize: "3rem",
  },
}))

const NavMenuSocialLinks = () => {
  const classes = useStyles()
  return (
    <Box>
      <NavMenuSocialLinksItem tooltip="Visit us on Facebook!">
        <Facebook className={classes.socialButton} />
      </NavMenuSocialLinksItem>
      <NavMenuSocialLinksItem end tooltip="Visit us on Instagram!">
        <Instagram className={classes.socialButton} />
      </NavMenuSocialLinksItem>
    </Box>
  )
}

export default NavMenuSocialLinks