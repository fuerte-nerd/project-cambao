import React from "react"
import { connect } from "react-redux"
import { setNav } from "../redux/actions"
import { Tooltip, Fab } from "@material-ui/core"
import { Close } from "@material-ui/icons"

const CloseMenuButton = props => {
  const text = {
    close: { en: "Close menu", es: "Cerrar el menú" },
  }
  return (
    <Tooltip title={text.close[props.lang]}>
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
const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(CloseMenuButton)
