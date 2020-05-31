import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import { setNoticeDialog } from "../redux/actions"
import { Box, Typography, Button, Link } from "@material-ui/core"
import { FacebookMessenger } from "mdi-material-ui"
import { Email } from "@material-ui/icons"
import SidebarSectionTitle from "./SidebarSectionTitle"

const SidebarChatNow = props => {
  const data = useStaticQuery(graphql`
    {
      file(
        name: { eq: "lostorabandoned" }
        sourceInstanceName: { eq: "static_content" }
      ) {
        childMarkdownRemark {
          frontmatter {
            en
            es
          }
        }
      }
    }
  `)

  const handleClick = e => {
    switch (e.currentTarget.id) {
      case "report":
        props.dispatch(
          setNoticeDialog({
            visible: true,
            heading: text.notice.heading[props.lang],
            body: data.file.childMarkdownRemark.frontmatter[props.lang],
            btnText: text.notice.close[props.lang],
          })
        )
    }
  }

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
      en: "Do you want to report a lost or abandoned dog?",
      es: "¿Quiere reportar un perro perdido o abandonado?",
    },
    notice: {
      heading: {
        en: "Report a lost or abandoned dog",
        es: "Reportar un perro perdido o abandonado",
      },
      close: { en: "Close", es: "Cerrar" },
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
      <Button
        fullWidth
        variant="contained"
        size="small"
        startIcon={<FacebookMessenger />}
      >
        Messenger
      </Button>
      <Button
        fullWidth
        variant="contained"
        size="small"
        startIcon={<Email />}
        style={{ marginTop: ".25rem" }}
      >
        Email
      </Button>
      <Typography variant="caption" align="justify">
        {text.lost[props.lang]}
        {` `}
        <strong onClick={handleClick} id="report" style={{ cursor: "pointer" }}>
          {text.click[props.lang]}
        </strong>
        .
      </Typography>
    </Box>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(SidebarChatNow)
