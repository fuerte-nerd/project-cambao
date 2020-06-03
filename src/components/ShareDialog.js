import React, { useState } from "react"
import { connect } from "react-redux"
import { setPopup } from "../redux/actions"
import {
  Hidden,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Snackbar,
} from "@material-ui/core"

import { Facebook, Twitter, WhatsApp, Email, Link } from "@material-ui/icons"
import { FacebookMessenger } from "mdi-material-ui"
import text from "./text"

const SharePopup = props => {
  const [toastIsOpen, setToastIsOpen] = useState(false)

  const handleClick = e => {
    switch (e.currentTarget.id) {
      case "facebook":
        return window.open(
          `https://www.facebook.com/sharer.php?u=${props.popup.href}`,
          "_blank"
        )
      case "messenger":
        let messengerEncodedText = encodeURIComponent(props.popup.href)
        return window.open(
          `fb-messenger://share?link=${messengerEncodedText}`,
          "_blank"
        )
      case "twitter":
        return window.open(
          `https://twitter.com/intent/tweet?url=${props.popup.href}`,
          "_blank"
        )
      case "whatsapp":
        let whatsappUrlEncodedText = encodeURIComponent(
          `${props.popup.href} ${props.popup.title}`
        )
        return window.open(
          `https://api.whatsapp.com/send?text=${whatsappUrlEncodedText}`,
          "_blank"
        )
      case "email":
        let emailUrlEncodedText = encodeURIComponent(props.popup.title)
        return window.open(
          `mailto:?subject=${emailUrlEncodedText}&body=${props.popup.href}`
        )
      case "copy":
        navigator.clipboard.writeText(props.popup.href)
        return setToastIsOpen(true)

      case "close":
        return props.dispatch(setPopup({ visible: false, href: "", title: "" }))
      default:
        return
    }
  }

  const handleClose = () => {
    props.dispatch(setPopup({ visible: false, href: "", title: "" }))
  }

  const handleToastClose = (e, r) => {
    return r === "clickaway" ? null : setToastIsOpen(false)
  }

  return (
    <Dialog open={props.popup.visible} onClose={handleClose}>
      <Snackbar
        open={toastIsOpen}
        autoHideDuration={5000}
        onClose={handleToastClose}
        message={text.copied[props.lang]}
        action={
          <Button color="secondary" onClick={handleToastClose}>
            {text.close[props.lang]}
          </Button>
        }
      />
      <DialogTitle>{text.shareVia[props.lang]}</DialogTitle>
      <DialogContent dividers>
        <List>
          <ListItem onClick={handleClick} id="facebook" button>
            <ListItemIcon>
              <Facebook />
            </ListItemIcon>
            <ListItemText primary="Facebook" />
          </ListItem>
          <Hidden smUp>
            <ListItem onClick={handleClick} id="messenger" button>
              <ListItemIcon>
                <FacebookMessenger />
              </ListItemIcon>
              <ListItemText primary="Messenger" />
            </ListItem>
          </Hidden>
          <ListItem button onClick={handleClick} id="twitter">
            <ListItemIcon>
              <Twitter />
            </ListItemIcon>
            <ListItemText primary="Twitter" />
          </ListItem>
          <ListItem button onClick={handleClick} id="whatsapp">
            <ListItemIcon>
              <WhatsApp />
            </ListItemIcon>
            <ListItemText primary="WhatsApp" />
          </ListItem>
          <ListItem button onClick={handleClick} id="email">
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText primary="Email" />
          </ListItem>
          <ListItem button onClick={handleClick} id="copy">
            <ListItemIcon>
              <Link />
            </ListItemIcon>
            <ListItemText primary={text.copyUrl[props.lang]} />
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClick} id="close">
          {text.cancel[props.lang]}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
  popup: state.sharePopup,
})

export default connect(mapStateToProps)(SharePopup)
