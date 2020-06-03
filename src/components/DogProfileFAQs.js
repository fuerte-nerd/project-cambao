import React from "react"
import { connect } from "react-redux"
import { Box, Typography, Button, Divider } from "@material-ui/core"
import DogProfileExpansionPanel from "./DogProfileExpansionPanel"
import InternalLink from "./InternalLink"
import text from "./text"

const DogProfileFAQs = props => {
  return (
    <DogProfileExpansionPanel
      title={text.faqTitle[props.lang]}
      headingVariant="h6"
    >
      <Box>
        <Question
          question={text.adoptQuestion[props.lang]}
          answer={text.adoptAnswer[props.lang]}
          link="/adopt"
          linkLabel={text.adoptADog[props.lang]}
        />
        <Question
          question={text.fosterQuestion[props.lang]}
          answer={text.fosterAnswer[props.lang]}
          link="/foster"
          linkLabel={text.fosterADog[props.lang]}
        />
        <Question
          question={text.donateQuestion[props.lang]}
          answer={text.donateAnswer[props.lang]}
          link="/donate"
          linkLabel={text.donateNowHeading[props.lang]}
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
