import React from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import { setLanguage, setLanguageDialog } from "../redux/actions"
import {
  Button,
  Dialog,
  Box,
  List,
  ListItem,
  Typography,
} from "@material-ui/core"

const LanguageDialog = props => {
  const handleClick = e => {
    const f = e.currentTarget
    navigate(`/${f.id + props.redirectUrl}`)
    localStorage.setItem("fdr_site_lang", f.id)
    props.dispatch(setLanguageDialog(false))
    props.dispatch(setLanguage(f.id))
  }

  const handleClose = () => {
    props.dispatch(setLanguageDialog(false))
  }
  const text = {
    cancel: { en: "Cancel", es: "Cancelar" },
  }
  return (
    <Dialog open={props.languageDialog} onClose={handleClose}>
      <Box p={2}>
        <List>
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
        <Button variant="outlined" fullWidth onClick={handleClose}>
          {text.cancel[props.lang]}
        </Button>
      </Box>
    </Dialog>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
  redirectUrl: state.redirect,
  languageDialog: state.languageDialogVisible,
})

export default connect(mapStateToProps)(LanguageDialog)
