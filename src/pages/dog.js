import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Divider, Box, Typography, Grid } from "@material-ui/core"
import Img from "gatsby-image"

const Dog = () => {
  const data = useStaticQuery(graphql`
    {
      dog1: file(name: { eq: "test" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 500, quality: 15) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Img fluid={data.dog1.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box p={2} bgcolor="#fafafa" boxShadow={2}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <Typography variant="h2">Buddy</Typography>
              </Grid>
              <Box width="100%" m="auto">
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={6}>
                    <DogProfileRow label="Age" info="11 months" />
                    <DogProfileRow label="Breed" info="German Shepherd" />
                    <DogProfileRow label="Sex" info="Female" />
                    <DogProfileRow label="Licence required" info="Yes" />
                    <DogProfileRow label="Location" info="Shelter" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <DogProfileRow label="Time in care" info="3 months" />
                    <DogProfileRow label="Dog-friendly" info="Yes" />
                    <DogProfileRow label="Cat-friendly" info="Yes" />
                    <DogProfileRow label="Family-friendly" info="Yes" />
                    <DogProfileRow label="Sterilized" info="Yes" />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

const DogProfileRow = props => (
  <Grid container spacing={1}>
    <Grid item xs={6}>
      <Typography color="textSecondary">{props.label}</Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography align="right">{props.info}</Typography>
    </Grid>
  </Grid>
)

export default Dog
