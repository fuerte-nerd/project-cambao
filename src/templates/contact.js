import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import { setLanguage, setRedirect } from "../redux/actions"
import { Button, Box, Typography, Container } from "@material-ui/core"
import { Email } from "@material-ui/icons"
import { FacebookMessenger } from "mdi-material-ui"

import Head from "../components/head"
import ContactForm from "../components/ContactForm"

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

  const text = {
    heading: { en: "Contact us", es: "Contacta con nosotros" },
    contact_on_messenger: {
      en: "The most efficient way to get in touch with us is via Messenger",
      es:
        "La forma más eficiente de ponerse en contacto con nosotros es a través de Messenger",
    },
    no_messenger: { en: "I don't use Messenger", es: "No uso el Messenger" },
    contact_by_email: {
      en: "No problem! You can also contact us by email",
      es: "No hay problema.  También puede contactarnos por correo electrónico",
    },
    email: {
      en: "Email",
      es: "E-mail",
    },
    contact_form_intro: {
      en:
        "If you prefer, you can send us a message directly from this site by completing and submitting the below form.",
      es:
        "Si lo prefiere, puede enviarnos un mensaje directamente desde este sitio completando y enviando el siguiente formulario.",
    },
    open: {
      en: "Open",
      es: "Abra",
    },
  }
  return (
    <>
      <Head lang={language} title={text.heading[language]} description="temp" />
      <Container>
        <Box color="white">
          <Typography variant="h2">{text.heading[language]}</Typography>
        </Box>
        <Box py={2}>
          <Typography paragraph>
            {text.contact_on_messenger[language]}...
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
          <Typography variant="h3">"{text.no_messenger[language]}"</Typography>
        </Box>
        <Box>
          <Typography paragraph>
            {text.contact_by_email[language]}...
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
          <Typography>{text.contact_form_intro[language]}</Typography>
        </Box>
        <Box mt={2}>
          <ContactForm language={language} />
        </Box>
      </Container>
    </>
  )
}

export default connect()(Contact)
