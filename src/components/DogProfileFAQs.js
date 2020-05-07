import React from "react"
import { Box, Typography } from "@material-ui/core"
import DogProfileExpansionPanel from "./DogProfileExpansionPanel"

const DogProfileFAQs = props => {
  return (
    <DogProfileExpansionPanel
      title="FAQs"
      headingVariant="h6"
    ></DogProfileExpansionPanel>
  )
}

const Question = props => (
  <Box>
    <Typography variant="h6">
      "I'm interested in adopting Timanfaya..."
    </Typography>
    <Typography variant="subtitle1" align="justify">
      Fantastic! You can find further information about the adoption process{" "}
      <InternalLink to="/adopt">here</InternalLink>.
    </Typography>
  </Box>
)

export default DogProfileFAQs
