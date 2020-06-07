import React from "react"
import { connect } from "react-redux"
import { setDonateDialog } from "../redux/actions"
import { Button, Hidden, Box } from "@material-ui/core"
import { Icon } from "@iconify/react"
import EuroIcon from "@iconify/icons-fa-solid/euro-sign"
import text from "./text"

const FabDonate = props => {
  const handleClick = () => {
    props.dispatch(setDonateDialog(true))
  }
  return (
    <Hidden mdUp>
      <Box
        color="primary.dark"
        style={{
          position: "fixed",
          bottom: ".5rem",
          right: ".5rem",
          zIndex: 1100,
        }}
      >
        <Button
          onClick={handleClick}
          variant="contained"
          color="inherit"
          size="small"
          endIcon={<Icon icon={EuroIcon} style={{ marginRight: ".5rem" }} />}
        >
          {text.donate[props.lang]}
        </Button>
      </Box>
    </Hidden>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(FabDonate)
