import React from "react"
import {
  useTheme,
  useMediaQuery,
  Container,
  Hidden,
  IconButton,
  Box,
  Typography,
  Grid,
} from "@material-ui/core"
import { Share, MoreVert } from "@material-ui/icons"

import DogProfilePhotoGallery from "../components/DogProfilePhotoGallery"
import DogProfileSummary from "../components/DogProfileSummary"
import DogProfileVideo from "../components/DogProfileVideo"
import DogProfileDescription from "../components/DogProfileDescription"
import DogProfileFAQs from "../components/DogProfileFAQs"
import DogProfileHeading from "../components/DogProfileHeading"

const Dog = props => {
  const theme = useTheme()
  const mdUp = useMediaQuery(theme.breakpoints.up("md"))
  console.log(props.data)
  const { frontmatter } = props.data.markdownRemark
  return (
    <Box>
      <Container>
        <Grid container spacing={mdUp ? 1 : 0}>
          <Grid item xs={12} md={4}>
            <Hidden mdUp>
              <DogProfileHeading name={frontmatter.name} mobile />
            </Hidden>
            <DogProfilePhotoGallery
              mainImage={frontmatter.main_image}
              images={frontmatter.images}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box px={mdUp ? 2 : 0}>
              <Grid container spacing={0} alignItems="center">
                <Hidden smDown>
                  <Grid item xs={12}>
                    <DogProfileHeading name={frontmatter.name} />
                  </Grid>
                </Hidden>
                <Grid item xs={12}>
                  <DogProfileSummary />
                </Grid>
                <Grid item xs={12}>
                  <DogProfileVideo />
                </Grid>
                <Grid item>
                  <DogProfileDescription />
                </Grid>
                <Grid item xs={12}>
                  <DogProfileFAQs />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        images {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
              src
            }
          }
        }
        sterilised
        sex
        ppp
        name
        location
        main_image {
          childImageSharp {
            fluid(maxWidth: 800) {
              src
            }
          }
        }
        description {
          en
          es
        }
        date_of_birth
        date_entered
        cat_friendly
        breed
        family_friendly
        dog_friendly
        summary {
          en
          es
        }
      }
    }
  }
`

export default Dog
