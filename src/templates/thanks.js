import React from "react"
import { Box, Typography, Button } from "@material-ui/core"
import { ArrowLeft } from "@material-ui/icons"

const Thanks = props => {
  const { language } = props
  const text = {
    thanks: { en: "Thank you!", es: "Muchas gracias..." },
    main_text: {
      en:
        "We have received your message and we will respond as soon as possible.",
      es: "Hemos recibido su mensaje y responderemos lo antes posible.",
    },
    redirect: {
      en:
        "We will redirect you back to the previous page automatically but if you cannot wait",
      es:
        "Automáticamente te redirigiremos a la página anterior, pero si no puedes esperar",
    },
    back: {
      en: "Back",
      es: "Volver",
    },
  }

  return (
    <Box align="center">
      <Typography variant="h2">{text.thanks[language]}</Typography>
      <Typography display="block">{text.main_text[language]}</Typography>
      <Typography display="block" variant="body2">
        {text.redirect[language]}
      </Typography>
      <Button startIcon={<ArrowLeft />}>{text.back[language]}</Button>
    </Box>
  )
}

export default Thanks
