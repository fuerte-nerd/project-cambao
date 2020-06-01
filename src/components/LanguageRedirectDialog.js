import React from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import { setLanguageRedirectDialog, setLanguage } from "../redux/actions"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core"

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
  const text = {
    title: {
      en: "Is this your preferred language?",
      es: "¿Este es tu idioma preferido?",
    },
    question: {
      en: "This site is available in English.  Would you prefer that?",
      es: "Este sitio web está disponible en español.  ¿Preferirías eso?",
    },
    yes: { en: "Yes", es: "Sí" },
    no: { en: "No", es: "No" },
  }
  return (
    <Dialog open={props.isOpen} onClose={handleClose}>
      <DialogTitle>{text.title[props.lang]}</DialogTitle>
      <DialogContent>{text.question[props.lang]}</DialogContent>
      <DialogActions>
        <Button id="yes" onClick={handleClick}>
          {text.yes[props.lang]}
        </Button>
        <Button onClick={handleClose}>{text.no[props.lang]}</Button>
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
