import React from "react"
import { connect } from "react-redux"
import { setDonateDialog } from "../redux/actions"
import { Fab, Hidden } from "@material-ui/core"
import { Icon } from "@iconify/react"
import EuroIcon from "@iconify/icons-fa-solid/euro-sign"
import text from "./text"

const FabDonate = props => {
  const handleClick = () => {
    props.dispatch(setDonateDialog(true))
  }
  return (
    <Hidden mdUp>
      <Fab
        onClick={handleClick}
        variant="extended"
        color="inherit"
        size="small"
        style={{
          position: "fixed",
          bottom: ".5rem",
          right: ".5rem",
          zIndex: 1100,
        }}
      >
        <Icon icon={EuroIcon} style={{ marginRight: ".5rem" }} />
        {text.donate[props.lang]}
      </Fab>
    </Hidden>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(FabDonate)
