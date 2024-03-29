import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setRedirect, setLanguage, setPopup } from "../redux/actions"
import {
  useTheme,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Box,
  Typography,
} from "@material-ui/core"
import { ArrowLeft, Share } from "@material-ui/icons"
import { graphql } from "gatsby"
import moment from "moment"
import "moment/locale/es"
import "moment/locale/fr"
import "moment/locale/it"
import "moment/locale/de"

import Head from "../components/head"
import InternalLink from "../components/InternalLink"
import text from "../components/text"

const Article = props => {
  const { language } = props.pageContext
  const theme = useTheme()
  const { article } = props.data
  moment.locale(language)

  useEffect(() => {
    props.dispatch(setRedirect("/"))
    props.dispatch(setLanguage(language))
    //eslint-disable-next-line
  }, [])

  const handleClick = e => {
    switch (e.currentTarget.id) {
      case "share":
        return props.dispatch(
          setPopup({
            visible: true,
            href: window.location.href,
            title: document.title,
          })
        )
      default:
        return
    }
  }

  return (
    <>
      <Head
        lang={language}
        title={article.frontmatter.title}
        description={article.excerpt}
        ogImage={
          props.data.og.frontmatter.featured_image.childImageSharp.fixed.src
        }
      />
      {props.siteReady ? (
        <Container>
          <Box color="white">
            <InternalLink to="/">
              <Button color="inherit" startIcon={<ArrowLeft />}>
                {text.back[language]}
              </Button>
            </InternalLink>
          </Box>
          <Box mb={2}>
            <Card>
              <Grid container>
                <Grid item xs={12} md={6} lg={5}>
                  <CardMedia
                    image={
                      article.frontmatter.featured_image.childImageSharp.fluid
                        .src
                    }
                    style={{ width: "100%", height: 400 }}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={7}>
                  <Box
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                  >
                    <CardContent>
                      <Typography variant="h2">
                        {article.frontmatter.title}
                      </Typography>
                      <Typography variant="overline">
                        {moment(article.frontmatter.date).format(
                          "dddd D MMMM YYYY"
                        )}
                      </Typography>
                    </CardContent>
                    <CardActions
                      style={{
                        background: theme.palette.secondary.main,
                        color: "white",
                      }}
                    >
                      <Button
                        onClick={handleClick}
                        id="share"
                        color="inherit"
                        startIcon={<Share />}
                      >
                        {text.share[language]}
                      </Button>
                    </CardActions>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Box>
          <Box>
            <Typography dangerouslySetInnerHTML={{ __html: article.html }} />
          </Box>
        </Container>
      ) : null}
    </>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    article: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date
        featured_image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt
      html
    }
    og: markdownRemark(id: { eq: $id }) {
      frontmatter {
        featured_image {
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
  siteReady: state.siteReady,
  lang: state.siteLang,
})
export default connect(mapStateToProps)(Article)
