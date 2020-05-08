import React from "react"
import { Container, Grid, Box, Typography } from "@material-ui/core"
import SEO from "../components/seo"

import DogListing from "../components/the-dogs/DogListing"

const TheDogs = () => {
  return (
    <>
      <SEO title="The Dogs" />
      <Box color="white">
        <Typography variant="h2">The Dogs</Typography>
      </Box>
      <Container>
        <Box mb={2}>
          <Typography variant="subtitle2">
            We have lots of dogs waiting for their forever home. Come and meet
            them! They can't wait to meet you!
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
              <DogListing />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
              <DogListing />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
              <DogListing />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
              <DogListing />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
              <DogListing />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default TheDogs
