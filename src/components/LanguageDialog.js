import React from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import { setLanguageDialog } from "../redux/actions"
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  Typography,
} from "@material-ui/core"
import text from "./text"

const LanguageDialog = props => {
  const handleClick = e => {
    const f = e.currentTarget
    localStorage.setItem("fdr_lang_pref", f.id)
    props.dispatch(setLanguageDialog(false))
    navigate(`/${f.id + props.redirectUrl}`)
  }

  const handleClose = () => {
    props.dispatch(setLanguageDialog(false))
  }
  return (
    <Dialog open={props.languageDialog} onClose={handleClose}>
      <DialogContent dividers>
        <List disablePadding>
          <ListItem
            button
            id="en"
            onClick={handleClick}
            style={{ justifyContent: "center" }}
          >
            <Typography>English</Typography>
          </ListItem>
          <ListItem
            button
            id="es"
            onClick={handleClick}
            style={{ justifyContent: "center" }}
          >
            <Typography>Español</Typography>
          </ListItem>
          <ListItem
            button
            id="de"
            onClick={handleClick}
            style={{ justifyContent: "center" }}
          >
            <Typography>Deutsch</Typography>
          </ListItem>
          <ListItem
            button
            id="it"
            onClick={handleClick}
            style={{ justifyContent: "center" }}
          >
            <Typography>Italiano</Typography>
          </ListItem>
          <ListItem
            button
            id="fr"
            onClick={handleClick}
            style={{ justifyContent: "center" }}
          >
            <Typography>Français</Typography>
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{text.cancel[props.lang]}</Button>
      </DialogActions>
    </Dialog>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
  redirectUrl: state.redirect,
  languageDialog: state.languageDialogVisible,
})

export default connect(mapStateToProps)(LanguageDialog)
