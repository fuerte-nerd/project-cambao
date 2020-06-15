import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setLanguage, setRedirect, setDonateDialog } from "../redux/actions"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import {
  useTheme,
  useMediaQuery,
  Container,
  Box,
  Typography,
  Grid,
  Button,
  Divider,
} from "@material-ui/core"
import { Icon } from "@iconify/react"
import EuroIcon from "@iconify/icons-fa-solid/euro-sign"
import ReactMarkdown from "react-markdown"
import InternalLink from "../components/InternalLink"
import Head from "../components/head"
import text from "../components/text"

const StaticPage = props => {
  const { language, pageName, redirectUrl } = props.pageContext
  const heading = `label${pageName[0].toUpperCase() + pageName.substr(1)}`
  const body = props.data.markdownRemark.frontmatter[language]
  const mdUp = useMediaQuery(useTheme().breakpoints.up("md"))
  useEffect(() => {
    props.dispatch(setLanguage(language))
    props.dispatch(setRedirect(redirectUrl))
    // eslint-disable-next-line
  }, [])

  const handleClick = e => {
    switch (e.currentTarget.id) {
      case "donate":
        return props.dispatch(setDonateDialog(true))
      default:
        return
    }
  }

  return (
    <>
      <Head
        lang={language}
        title={text[heading][language]}
        description={`${body.split(" ", 25).join(" ")}...`}
      />

      <Container>
        <Box color="white">
          <Typography variant="h2">{text[heading][language]}</Typography>
        </Box>
        <Grid container spacing={mdUp ? 6 : 2}>
          <Box clone order={{ xs: 1, md: 2 }}>
            <Grid item xs={12} md={7}>
              <Box borderRadius="borderRadius" boxShadow={3}>
                <Img
                  fluid={
                    props.data.markdownRemark.frontmatter.image.childImageSharp
                      .fluid
                  }
                />
              </Box>
            </Grid>
          </Box>
          <Box clone order={{ xs: 2, md: 1 }}>
            <Grid item xs={12} md={5}>
              <Box>
                {pageName === `donate` ? (
                  <Box align="center" mb={2}>
                    <Typography variant="subtitle1">
                      {text.donateNowIntro[language]}
                    </Typography>
                    <Box mb={2} color="primary.dark">
                      <Button
                        size="large"
                        color="inherit"
                        variant="contained"
                        endIcon={<Icon icon={EuroIcon} />}
                        onClick={handleClick}
                        id="donate"
                      >
                        {text.donate[language]}
                      </Button>
                    </Box>
                    <Divider />
                  </Box>
                ) : null}
                <ReactMarkdown
                  source={body}
                  renderers={{
                    paragraph: MyTypography,
                  }}
                />
                <Box color="white" align="center">
                  <Typography>{text.forFurtherInfo[language]}...</Typography>
                  <Box color="primary.dark">
                    <InternalLink to="/contact">
                      <Button id="contact" color="inherit" variant="contained">
                        {text.contactHeading[language]}
                      </Button>
                    </InternalLink>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </>
  )
}

const MyTypography = ({ children }) => (
  <Typography paragraph align="justify">
    {children}
  </Typography>
)

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 600, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        en
        es
        de
        fr
        it
      }
    }
  }
`

const mapStateToProps = state => ({
  redirect: state.redirect,
})

export default connect(mapStateToProps)(StaticPage)
