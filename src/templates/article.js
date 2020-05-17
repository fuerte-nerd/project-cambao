import React from "react"
import { connect } from "react-redux"
import { setRedirect, setLanguage } from "../redux/actions"
import {
  useTheme,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Box,
  IconButton,
  Typography,
} from "@material-ui/core"
import { Facebook, Twitter, WhatsApp, Email } from "@material-ui/icons"
import { graphql } from "gatsby"
import moment from "moment"
import "moment/locale/es"

const Article = props => {
  const theme = useTheme()
  const article = props.data.markdownRemark
  moment.locale(props.lang)
  props.dispatch(setRedirect("/"))
  props.dispatch(setLanguage(props.pageContext.lang))
  return (
    <Container>
      <Box mb={2}>
        <Card>
          <Grid container>
            <Grid item xs={12} md={6} lg={5}>
              <CardMedia
                image={
                  article.frontmatter.featured_image.childImageSharp.fluid.src
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
                    {moment(article.frontmatter.date).format("D MMMM YYYY")}
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    background: theme.palette.secondary.main,
                    color: "white",
                  }}
                >
                  <IconButton color="inherit">
                    <Facebook />
                  </IconButton>
                  <IconButton color="inherit">
                    <Twitter />
                  </IconButton>
                  <IconButton color="inherit">
                    <WhatsApp />
                  </IconButton>
                  <IconButton color="inherit">
                    <Email />
                  </IconButton>
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
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
      html
    }
  }
`

const mapStateToProps = state => ({
  lang: state.siteLang,
})
export default connect(mapStateToProps)(Article)
