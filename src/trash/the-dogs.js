import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setLanguage } from "../redux/actions"
import { Container, Grid, Box, Typography } from "@material-ui/core"
import SEO from "../components/seo"

import DogListing from "../components/the-dogs/DogListing"
import SharePopup from "../components/SharePopup"

const TheDogs = props => {
  useEffect(() => {
    props.dispatch(setLanguage(props.pageContext.lang))
  }, [])
  return (
    <>
      <SharePopup />
      <SEO title="The Dogs" />
      <Container>
        <Box color="white">
          <Typography variant="h2">The Dogs</Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="subtitle1">
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

const mapStateToProps = state => ({
  lang: state.siteLang,
})
export default connect(mapStateToProps)(TheDogs)
