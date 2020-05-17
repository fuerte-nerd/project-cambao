import React from "react"
import { connect } from "react-redux"
import { Box, Typography, Button, Divider } from "@material-ui/core"
import DogProfileExpansionPanel from "./DogProfileExpansionPanel"
import InternalLink from "./InternalLink"

const DogProfileFAQs = props => {
  const text = {
    title: {
      en: "FAQs",
      es: "Preguntas frecuentes",
    },
    questions: {
      adopt: { en: "How do I adopt a dog?", es: "¿Cómo adopto un perro?" },
      foster: {
        en: "How can I foster a dog?",
        es: "¿Cómo puedo acoger a un perro?",
      },
      donate: { en: "How do I donate?", es: "¿Cómo puedo donar?" },
    },
    answers: {
      adopt: {
        en:
          "You can find further information about the adoption process by following the link below.",
        es:
          "Puede encontrar más información sobre el proceso de adopción en el siguiente enlace.",
      },
      foster: {
        en:
          "You can find further information about the fostering process by following the link below.",
        es:
          "Puede encontrar más información sobre el proceso de acogida en el siguiente enlace.",
      },
      donate: {
        en:
          "You can find further information about how to donate by following the link below.",
        es:
          "Puede encontrar más información sobre cómo donar siguiendo el siguiente enlace.",
      },
    },
    buttons: {
      adopt: { en: "Adopt a dog", es: "Adopta un perro" },
      foster: { en: "Foster a dog", es: "Formenta un perro" },
      donate: { en: "Donate to FDR", es: "Donar a FDR" },
    },
  }
  return (
    <DogProfileExpansionPanel
      title={text.title[props.lang]}
      headingVariant="h6"
    >
      <Box>
        <Question
          question={text.questions.adopt[props.lang]}
          answer={text.answers.adopt[props.lang]}
          link="/adopt"
          linkLabel={text.buttons.adopt[props.lang]}
        />
        <Question
          question={text.questions.foster[props.lang]}
          answer={text.answers.foster[props.lang]}
          link="/foster"
          linkLabel={text.buttons.foster[props.lang]}
        />
        <Question
          question={text.questions.donate[props.lang]}
          answer={text.answers.donate[props.lang]}
          link="/donate"
          linkLabel={text.buttons.donate[props.lang]}
          last
        />
      </Box>
    </DogProfileExpansionPanel>
  )
}

const Question = props => (
  <Box pb={props.last ? 0 : 2}>
    <Typography variant="h6">"{props.question}"</Typography>
    <Typography variant="subtitle1" align="justify" paragraph>
      {props.answer}
    </Typography>
    <InternalLink to={props.link}>
      <Button color="primary" variant="contained">
        {props.linkLabel}
      </Button>
    </InternalLink>
    {props.last ? null : (
      <Box mt={2}>
        <Divider />
      </Box>
    )}
  </Box>
)

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(DogProfileFAQs)
