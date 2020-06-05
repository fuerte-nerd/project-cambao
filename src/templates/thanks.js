import React from "react"
import { Box, Typography, Button } from "@material-ui/core"
import { ArrowLeft } from "@material-ui/icons"
import text from "../components/text"

const Thanks = props => {
  const { language } = props

  return (
    <Box align="center">
      <Typography variant="h2">{text.thanks[language]}</Typography>
      <Typography display="block">{text.thanksMessage[language]}</Typography>
      <Typography display="block" variant="body2">
        {text.thanksRedirect[language]}
      </Typography>
      <Button startIcon={<ArrowLeft />}>{text.back[language]}</Button>
    </Box>
  )
}

export default Thanks
