import React from "react"
import { Grid, Box, Typography } from "@material-ui/core"
import SEO from "../components/seo"

import DogListing from "../components/the-dogs/DogListing"

const TheDogs = () => {
  return (
    <>
      <SEO title="The Dogs" />
      <Typography variant="h2">The Dogs</Typography>
      <Typography variant="subtitle1">
        We have lots of dogs waiting for their forever home. Come and meet them!
        They can't wait to meet you!
      </Typography>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <DogListing />
          </Grid>
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <DogListing />
          </Grid>
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <DogListing />
          </Grid>
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <DogListing />
          </Grid>
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <DogListing />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default TheDogs
