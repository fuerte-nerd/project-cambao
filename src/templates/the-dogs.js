import React from "react"
import { connect } from "react-redux"
import { setRedirect } from "../redux/actions"
import { Container, Box, Typography, Grid } from "@material-ui/core"
import DogListing from "../components/the-dogs/DogListing"
import SEO from "../components/seo"

const TheDogsTemplate = props => {
  props.dispatch(setRedirect("/the-dogs"))
  return (
    <>
      <SEO title={props.seo_title} />
      <Container>
        <Box color="white">
          <Typography variant="h2">{props.heading}</Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="subtitle1">{props.subheading}</Typography>
        </Box>
        <Box>
          <Grid container spacing={1}>
            {props.dogs.map(dog => (
              <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
                <DogListing
                  name={dog.name}
                  image={dog.image}
                  summary={dog.summary}
                  slug={dog.slug}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default connect()(TheDogsTemplate)
