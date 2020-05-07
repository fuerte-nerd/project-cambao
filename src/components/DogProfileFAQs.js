import React from "react"
import { Box, Typography, Button, Divider } from "@material-ui/core"
import DogProfileExpansionPanel from "./DogProfileExpansionPanel"
import InternalLink from "./InternalLink"

const DogProfileFAQs = props => {
  return (
    <DogProfileExpansionPanel title="FAQs" headingVariant="h6">
      <Box>
        <Question
          question="I'm interested in adopting Timanfaya. What should I do?"
          answer="Fantastic! You can find further information about the adoption process by following the link below."
          link="/adopt"
          linkLabel="Adopt a dog"
        />
        <Question
          question="I'm interested in fostering Timanfaya. What should I do?"
          answer="Brilliant! You can find further information about the fostering process by following the link below."
          link="/foster"
          linkLabel="Foster a dog"
        />
        <Question
          question="Can I make a contribution towards Timanfaya's costs?"
          answer="That's very kind of you! Thank you.  You can find further information about how to donate by following the link below."
          link="/donate"
          linkLabel="Donate to Fuerteventura Dog Rescue"
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

export default DogProfileFAQs
