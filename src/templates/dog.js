import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { connect } from "react-redux"
import { setRedirect, setLanguage } from "../redux/actions"
import {
  useTheme,
  Hidden,
  Button,
  useMediaQuery,
  Container,
  Box,
  Grid,
} from "@material-ui/core"
import { ArrowLeft } from "@material-ui/icons"

import Head from "../components/head"
import InternalLink from "../components/InternalLink"

import DogProfilePhotoGallery from "../components/DogProfilePhotoGallery"
import DogProfileSummary from "../components/DogProfileSummary"
import DogProfileVideo from "../components/DogProfileVideo"
import DogProfileDescription from "../components/DogProfileDescription"
import DogProfileFAQs from "../components/DogProfileFAQs"
import DogProfileHeading from "../components/DogProfileHeading"
import text from "../components/text"

const Dog = props => {
  const { language } = props.pageContext
  useEffect(() => {
    props.dispatch(setLanguage(language))
    props.dispatch(setRedirect(`/dogs${props.data.main.fields.slug}`))
    //eslint-disable-next-line
  }, [])
  const theme = useTheme()
  const mdUp = useMediaQuery(theme.breakpoints.up("md"))
  const { frontmatter } = props.data.main

  const images = {
    full: [
      props.data.largeImages.frontmatter.main_image,
      ...props.data.largeImages.frontmatter.images,
    ],
    thumbs: [
      props.data.thumbnails.frontmatter.main_image,
      ...props.data.thumbnails.frontmatter.images,
    ],
  }

  return (
    <>
      <Head
        lang={language}
        title={frontmatter.title}
        description={frontmatter.summary[language]}
        ogImage={props.data.og.frontmatter.main_image.childImageSharp.fixed.src}
      />
      <Box>
        <Container>
          <Box color="white">
            <InternalLink to="/the-dogs">
              <Button color="inherit" startIcon={<ArrowLeft />}>
                {text.back[language]}
              </Button>
            </InternalLink>
          </Box>
          <Grid container spacing={mdUp ? 1 : 0}>
            <Grid item xs={12} md={4}>
              <Hidden mdUp>
                <DogProfileHeading name={frontmatter.title} mobile />
              </Hidden>
              <DogProfilePhotoGallery images={images} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Box px={mdUp ? 2 : 0}>
                <Grid container spacing={0} alignItems="center">
                  <Hidden smDown>
                    <Grid item xs={12}>
                      <DogProfileHeading name={frontmatter.title} />
                    </Grid>
                  </Hidden>
                  <Grid item xs={12}>
                    <DogProfileSummary
                      dogData={{
                        sterilised: frontmatter.sterilised,
                        sex: frontmatter.sex,
                        ppp: frontmatter.ppp,
                        location: frontmatter.location,
                        date_of_birth: frontmatter.date_of_birth,
                        date_entered: frontmatter.date_entered,
                        family_friendly: frontmatter.family_friendly,
                        dog_friendly: frontmatter.dog_friendly,
                        cat_friendly: frontmatter.cat_friendly,
                        breed: frontmatter.breed,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <DogProfileVideo url={frontmatter.youtube} />
                  </Grid>
                  <Grid item xs={12}>
                    <DogProfileDescription
                      description={frontmatter.description[language]}
                    />
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
    </>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    main: markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        youtube
        sterilised
        sex
        ppp
        title
        location
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
      fields {
        slug
      }
    }
    largeImages: markdownRemark(id: { eq: $id }) {
      frontmatter {
        images {
          childImageSharp {
            id
            fluid(maxWidth: 844, maxHeight: 1055) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        main_image {
          childImageSharp {
            id
            fluid(maxWidth: 844, maxHeight: 1055) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    thumbnails: markdownRemark(id: { eq: $id }) {
      frontmatter {
        images {
          childImageSharp {
            id
            fluid(maxWidth: 130, maxHeight: 130) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        main_image {
          childImageSharp {
            id
            fluid(maxWidth: 130, maxHeight: 130) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    og: markdownRemark(id: { eq: $id }) {
      frontmatter {
        main_image {
          childImageSharp {
            fixed(width: 1200, height: 627) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

const mapStateToProps = state => ({
  lang: state.siteLang,
})
export default connect(mapStateToProps)(Dog)
