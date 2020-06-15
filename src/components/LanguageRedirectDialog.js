import React from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import { setLanguageRedirectDialog } from "../redux/actions"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core"
import text from "./text"

const LanguageRedirectDialog = props => {
  const handleClick = e => {
    switch (e.currentTarget.id) {
      case "yes":
        localStorage.setItem("fdr_lang_pref", props.lang)
        props.dispatch(
          setLanguageRedirectDialog({
            visible: false,
            lang: ``,
          })
        )
        return navigate(`/${props.lang + props.redirectUrl}`)
      default:
        return
    }
  }

  const handleClose = () => {
    props.dispatch(
      setLanguageRedirectDialog({
        visible: false,
        lang: ``,
      })
    )
  }
  return (
    <Dialog open={props.isOpen} onClose={handleClose}>
      <DialogTitle>
        {props.lang ? text.preferredLanguage[props.lang] : ""}
      </DialogTitle>
      <DialogContent dividers>
        {props.lang ? text.languageAvailable[props.lang] : ""}
      </DialogContent>
      <DialogActions>
        <Button id="yes" onClick={handleClick}>
          {props.lang ? text.yes[props.lang] : ""}
        </Button>
        <Button onClick={handleClose}>
          {props.lang ? text.no[props.lang] : ""}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const mapStateToProps = state => ({
  lang: state.languageRedirectDialog.lang,
  isOpen: state.languageRedirectDialog.visible,
  redirectUrl: state.redirect,
})

export default connect(mapStateToProps)(LanguageRedirectDialog)
