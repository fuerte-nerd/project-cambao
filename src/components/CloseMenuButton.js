import React from "react"
import { connect } from "react-redux"
import { setNav } from "../redux/actions"
import { Tooltip, Fab } from "@material-ui/core"
import { Close } from "@material-ui/icons"

const CloseMenuButton = props => {
  return (
    <Tooltip title="Close menu">
      <Fab
        id="close"
        onClick={() => props.dispatch(setNav(false))}
        style={{ position: "fixed", top: "1rem", right: "1rem" }}
      >
        <Close />
      </Fab>
    </Tooltip>
  )
}

export default connect()(CloseMenuButton)
