import React from "react"
import { Box, Grid, TextField, Button } from "@material-ui/core"
import { Send } from "@material-ui/icons"
import text from "./text"

const ContactForm = props => {
  const { language } = props
  return (
    <Box p={5} bgcolor="white" borderRadius="borderRadius">
      <form
        name={`Contact - ${language.toUpperCase()}`}
        method="POST"
        action={`/${language}/thanks`}
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="bot-field" />
        <Grid container align="center" spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              label={text.name[language]}
              name="name"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label={text.email[language]}
              name="email"
              fullWidth
              required
              type="email"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label={text.phone[language]} name="phone" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={text.message[language]}
              name="message"
              fullWidth
              multiline
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Box py={2}>
              <Button
                variant="contained"
                color="secondary"
                style={{ color: "white" }}
                fullWidth
                endIcon={<Send />}
              >
                {text.send[language]}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default ContactForm
