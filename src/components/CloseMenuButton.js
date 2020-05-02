import React from "react"
import { Tooltip, Fab } from "@material-ui/core"
import { Close } from "@material-ui/icons"

const CloseMenuButton = () => {
  return (
    <Tooltip title="Close menu">
      <Fab
        id="close"
        onClick={handleClick}
        style={{ position: "fixed", top: "1rem", right: "1rem" }}
      >
        <Close />
      </Fab>
    </Tooltip>
  )
}

export default CloseMenuButton
