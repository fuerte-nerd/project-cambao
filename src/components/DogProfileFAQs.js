import React from "react"
import { connect } from "react-redux"
import { Box, Typography, Button, Divider } from "@material-ui/core"
import DogProfileExpansionPanel from "./DogProfileExpansionPanel"
import InternalLink from "./InternalLink"
import text from "./text"

const DogProfileFAQs = props => {
  const { lang } = props
  return (
    <DogProfileExpansionPanel
      title={lang ? text.faqTitle[lang] : ""}
      headingVariant="h6"
    >
      <Box>
        <Question
          question={lang ? text.adoptQuestion[lang] : ""}
          answer={lang ? text.adoptAnswer[lang] : ""}
          link="/adopt"
          linkLabel={lang ? text.adoptADog[lang] : ""}
        />
        <Question
          question={lang ? text.fosterQuestion[lang] : ""}
          answer={lang ? text.fosterAnswer[lang] : ""}
          link="/foster"
          linkLabel={lang ? text.fosterADog[lang] : ""}
        />
        <Question
          question={lang ? text.donateQuestion[lang] : ""}
          answer={lang ? text.donateAnswer[lang] : ""}
          link="/donate"
          linkLabel={lang ? text.donateNowHeading[lang] : ""}
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
