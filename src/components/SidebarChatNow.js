import React from "react"
import { connect } from "react-redux"
import { Box, Typography, Button, Link } from "@material-ui/core"
import { FacebookMessenger } from "mdi-material-ui"
import { Email } from "@material-ui/icons"
import SidebarSectionTitle from "./SidebarSectionTitle"
import InternalLink from "./InternalLink"

const SidebarChatNow = props => {
  const text = {
    heading: {
      en: "Send us a message",
      es: "Envíenos un mensaje",
    },
    subheading: {
      en: "Contact us now via...",
      es: "Contáctenos ahora por...",
    },
    lost: {
      en: "Are you wanting to report a lost or abandoned dog?",
      es: "¿Quiere reportar un perro perdido o abandonado?",
    },
    click: {
      en: "Click here",
      es: "Haga clic aquí",
    },
  }
  return (
    <Box>
      <SidebarSectionTitle title={text.heading[props.lang]} />
      <Typography variant="caption">{text.subheading[props.lang]}</Typography>
      <Box display="block">
        <Button startIcon={<FacebookMessenger />}>Messenger</Button>
      </Box>
      <Box display="block">
        <Button startIcon={<Email />}>Email</Button>
      </Box>
      <Typography variant="caption" align="justify">
        {text.lost[props.lang]}
        <InternalLink>{text.click[props.lang]}</InternalLink>
      </Typography>
    </Box>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(SidebarChatNow)
