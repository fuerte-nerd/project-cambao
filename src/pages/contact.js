import React from "react"
import { Grid, Button, TextField, Box, Typography } from "@material-ui/core"
import { FacebookMessenger } from "mdi-material-ui"
import SEO from "../components/seo"

const Contact = () => {
  return (
    <>
      <SEO title="Contact" />
      <Box color="white">
        <Typography variant="h2">Contact us</Typography>
      </Box>
      <Box>
        <Typography paragraph>
          The most efficient method to get in touch with us is via Messenger...
        </Typography>
      </Box>
      <Box>
        <Button
          size="large"
          variant="contained"
          color="secondary"
          startIcon={<FacebookMessenger />}
        >
          Contact us on Messenger
        </Button>
      </Box>
      <Box color="white">
        <Typography variant="h3">"I don't use Messenger..."</Typography>
      </Box>
      <Grid container>
        <Grid item></Grid>
      </Grid>
    </>
  )
}

export default Contact
