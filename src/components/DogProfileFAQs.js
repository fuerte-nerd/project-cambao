import React from "react"
import { Box, Typography } from "@material-ui/core"
import DogProfileExpansionPanel from "./DogProfileExpansionPanel"

const DogProfileFAQs = props => {
  return (
    <DogProfileExpansionPanel title="FAQs" headingVariant="h6">
      <Question
        question="I'm interested in adopting Timanfaya. What should I do?"
        answer="Fantastic! You can find further information about the adoption process by following the link below."
        link="/adopt"
        linkLabel="Adopt a dog"
      />
    </DogProfileExpansionPanel>
  )
}

const Question = props => (
  <Box>
    <Typography variant="h6">{props.question}</Typography>
    <Typography variant="subtitle1" align="justify">
      {props.answer}
    </Typography>
    <InternalLink to={props.link}>{props.linkLabel}</InternalLink>
  </Box>
)

export default DogProfileFAQs
