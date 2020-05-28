import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setLanguage, setRedirect } from "../redux/actions"
import { graphql } from "gatsby"
import { Container, Box, Typography } from "@material-ui/core"
import Head from "../components/head"

const WhoAreWe = props => {
  useEffect(() => {
    props.dispatch(setLanguage(props.pageContext.language))
    props.dispatch(setRedirect("/who-are-we"))
  }, [])

  const text = {
    heading: { en: "Who are we?", es: "¿Quiénes somos?" },
  }

  return (
    <>
      <Head
        lang={props.pageContext.language}
        title={text.heading[props.lang]}
        description="temp"
      />

      <Container>
        <Box color="white">
          <Typography variant="h2">{text.heading[props.lang]}</Typography>
        </Box>
        <Typography
          dangerouslySetInnerHTML={{
            __html: props.data.file.childMarkdownRemark.frontmatter[props.lang],
          }}
        />
      </Container>
    </>
  )
}

export const query = graphql`
  {
    file(
      sourceInstanceName: { eq: "static_content" }
      extension: { eq: "md" }
      name: { eq: "whoarewe" }
    ) {
      childMarkdownRemark {
        frontmatter {
          en
          es
        }
      }
    }
  }
`

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(WhoAreWe)
