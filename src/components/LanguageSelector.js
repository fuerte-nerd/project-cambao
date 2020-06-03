import React from "react"
import { connect } from "react-redux"
import { setLanguageDialog } from "../redux/actions"
import { Button, Tooltip } from "@material-ui/core"
import { Translate } from "@material-ui/icons"
import text from "./text"

const LanguageSelector = props => {
  return (
    <Tooltip title={text.changeLanguage[props.lang]}>
      <Button
        size="small"
        fullWidth={props.fullWidth ? true : false}
        variant="contained"
        onClick={() => props.dispatch(setLanguageDialog(true))}
        startIcon={<Translate />}
      >
        {props.lang}
      </Button>
    </Tooltip>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(LanguageSelector)
