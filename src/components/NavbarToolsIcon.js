import React from "react"
import { withStyles, Tooltip, IconButton } from "@material-ui/core"

const NavbarToolsIcon = props => {

  const test = withStyles({
    root: {
      fontSize=".6rem"
    }
  })
  return (
    <Tooltip title={props.tooltip}>
      <IconButton color="inherit" classes={{root: {fontSize: ".6rem"}}  style={{ fontSize: ".7rem" }}>
        {props.children}
      </IconButton>
    </Tooltip>
  )
}

export default NavbarToolsIcon
