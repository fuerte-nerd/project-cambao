import React from "react"
import {
  Grid,
  Button,
  TextField,
  Box,
  Typography,
  Paper,
  Container,
} from "@material-ui/core"
import { Send, Email } from "@material-ui/icons"
import { FacebookMessenger } from "mdi-material-ui"
import SEO from "../components/seo"

const Contact = () => {
  return (
    <>
      <SEO title="Contact" />
      <Box color="white">
        <Typography variant="h2">Contact us</Typography>
      </Box>
      <Container>
        <Box py={2}>
          <Typography paragraph>
            The most efficient method to get in touch with us is via
            Messenger...
          </Typography>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            startIcon={<FacebookMessenger />}
          >
            Contact us on Messenger
          </Button>
        </Box>
        <Box mt={3} color="white">
          <Typography variant="h3">"I don't use Messenger..."</Typography>
        </Box>
        <Box>
          <Typography paragraph>
            No problem! You can also contact us by email...
          </Typography>
        </Box>
        <Box>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            startIcon={<Email />}
          >
            Send us an email
          </Button>
        </Box>
        <Box mt={3}>
          <Typography>
            If you prefer, you can send us an email directly from this page by
            completing and submitting the form below...
          </Typography>
        </Box>
        <Grid container align="center" spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField label="Name" name="name" fullWidth required />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Email"
              name="email"
              fullWidth
              required
              type="email"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Phone" name="phone" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              name="message"
              fullWidth
              multiline
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="secondary" endIcon={<Send />}>
              Send
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Contact
