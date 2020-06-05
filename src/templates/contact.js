import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import { setLanguage, setRedirect } from "../redux/actions"
import { Button, Box, Typography, Container } from "@material-ui/core"
import { Email } from "@material-ui/icons"
import { FacebookMessenger } from "mdi-material-ui"

import Head from "../components/head"
import ContactForm from "../components/ContactForm"
import text from "../components/text"

const Contact = props => {
  const { language } = props.pageContext

  const data = useStaticQuery(graphql`
    {
      file(
        name: { eq: "links" }
        sourceInstanceName: { eq: "static_content" }
      ) {
        childMarkdownRemark {
          frontmatter {
            facebook
            email
          }
        }
      }
    }
  `)
  const { facebook, email } = data.file.childMarkdownRemark.frontmatter

  useEffect(() => {
    props.dispatch(setRedirect("/contact"))
    props.dispatch(setLanguage(language))
    //eslint-disable-next-line
  }, [])

  const handleClick = e => {
    switch (e.currentTarget.id) {
      case "messenger":
        return window.open(`http://m.me/${facebook}`, "_blank")
      case "email":
        return window.open(`mailto:${email}`, "_blank")
      default:
        return
    }
  }

  return (
    <>
      <Head
        lang={language}
        title={text.contactHeading[language]}
        description={text.contactDescription[language]}
      />
      <Container>
        <Box color="white">
          <Typography variant="h2">{text.contactHeading[language]}</Typography>
        </Box>
        <Box py={2}>
          <Typography paragraph>
            {text.contactMessenger[language]}...
          </Typography>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            style={{ color: "white" }}
            startIcon={<FacebookMessenger />}
            id="messenger"
            onClick={handleClick}
          >
            {text.open[language]}
            {` `}Messenger
          </Button>
        </Box>
        <Box mt={3} color="white">
          <Typography variant="h3">
            "{text.dontUseMessengerHeading[language]}"
          </Typography>
        </Box>
        <Box>
          <Typography paragraph>
            {text.dontUseMessengerBody[language]}...
          </Typography>
        </Box>
        <Box color="white">
          <Button
            size="large"
            variant="contained"
            color="secondary"
            style={{ color: "white" }}
            startIcon={<Email />}
            id="email"
            onClick={handleClick}
          >
            {text.open[language]}
            {` `}
            {text.email[language]}
          </Button>
        </Box>
        <Box mt={3}>
          <Typography>{text.contactFormIntro[language]}</Typography>
        </Box>
        <Box mt={2}>
          <ContactForm language={language} />
        </Box>
      </Container>
    </>
  )
}

export default connect()(Contact)
