import React from "react"
import { connect } from "react-redux"
import { setLanguageDialog } from "../redux/actions"
import { Button, Tooltip } from "@material-ui/core"
import { Language } from "@material-ui/icons"

const LanguageSelector = props => {
  const text = {
    change: { en: "Change language", es: "Cambiar de idioma" },
  }
  return (
    <Tooltip title={text.change[props.lang]}>
      <Button
        size="small"
        fullWidth={props.fullWidth ? true : false}
        variant="contained"
        onClick={() => props.dispatch(setLanguageDialog(true))}
        startIcon={<Language />}
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
