import React from "react"
import { connect } from "react-redux"
import { setDonateDialog } from "../redux/actions"
import { Box, Typography, Button } from "@material-ui/core"
import { EuroSymbol } from "@material-ui/icons"
import SidebarSectionTitle from "./SidebarSectionTitle"

const SidebarDonate = props => {
  const text = {
    heading: {
      en: "Donate now",
      es: "Dona ahora",
    },
    subheading: {
      en:
        "We are a volunteer organization and appreciate anything you can give...",
      es:
        "Somos una organización de voluntarios y apreciamos cualquier cosa que pueda dar...",
    },
    button: {
      en: "Donate",
      es: "Donar",
    },
  }
  return (
    <Box>
      <SidebarSectionTitle title={text.heading[props.lang]} />
      <Box pb={2}>
        <Typography variant="caption" align="justify">
          {text.subheading[props.lang]}
        </Typography>
        <Box mt={2}>
          <Button
            variant="contained"
            size="small"
            fullWidth
            startIcon={<EuroSymbol />}
            onClick={() => props.dispatch(setDonateDialog(true))}
          >
            {text.button[props.lang]}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(SidebarDonate)
