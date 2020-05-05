import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  useTheme,
  useMediaQuery,
  Divider,
  Box,
  Typography,
  Grid,
} from "@material-ui/core"
import Img from "gatsby-image"

const Dog = () => {
  const theme = useTheme()
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
  const smUp = useMediaQuery(theme.breakpoints.up("sm"))

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <Img fluid={data.dog1.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box p={2} bgcolor="#fafafa" boxShadow={2}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6}>
                <Box color="primary.dark">
                  <Typography variant="h2">Buddy</Typography>
                </Box>
              </Grid>

              <Box mx={2} width="100%">
                <Grid container spacing={smUp ? 8 : 0} alignItems="flex-start">
                  <Grid item xs={12} sm={6}>
                    <DogProfileRow label="Age" info="11 months" first />
                    <DogProfileRow label="Breed" info="German Shepherd" />
                    <DogProfileRow label="Sex" info="Female" />
                    <DogProfileRow label="Licence required" info="Yes" />
                    <DogProfileRow label="Location" info="Shelter" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <DogProfileRow
                      label="Time in care"
                      info="3 months"
                      first={smUp ? true : false}
                    />
                    <DogProfileRow label="Dog-friendly" info="Yes" />
                    <DogProfileRow label="Cat-friendly" info="Yes" />
                    <DogProfileRow label="Family-friendly" info="Yes" />
                    <DogProfileRow label="Sterilized" info="Yes" />
                  </Grid>
                </Grid>
                <Grid item>
                  <Box my={2}>
                    <Typography variant="body1">
                      Lorem a dolor possimus minus magnam? Magnam modi at alias
                      exercitationem temporibus? Accusamus laudantium nihil
                      dolores blanditiis numquam Optio corporis neque tenetur
                      quam animi a Assumenda atque quisquam asperiores quae
                      deleniti. Repellat dolor voluptate iure tempore laborum Ex
                      quasi consectetur cupiditate illum nihil eius Voluptate
                      laborum ipsum minus dolorem dolore.\n\n Adipisicing ad
                      nobis debitis eius velit Cum expedita nostrum quidem
                      delectus quo id Id tempora beatae id soluta error? Odio in
                      et expedita aperiam quas velit Vitae facere reiciendis
                      accusamus consequatur eos distinctio! Officia sunt debitis
                      voluptate accusantium recusandae Quisquam ratione
                      accusamus placeat animi ex fuga? Veritatis velit earum
                      nulla!
                    </Typography>
                  </Box>
                </Grid>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

const DogProfileRow = props => {
  return (
    <Grid container alignItems="flex-end">
      <Grid item xs={6}>
        <Box pb={1} borderBottom={1}>
          <Typography variant="overline">{props.label}</Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box pb={1} borderBottom={1}>
          <Typography variant="body2" align="right">
            {props.info}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Dog
