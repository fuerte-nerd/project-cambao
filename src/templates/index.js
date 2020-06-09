import React, { useEffect } from "react"
import { graphql, navigate } from "gatsby"
import { connect } from "react-redux"
import { setRedirect, setLanguage } from "../redux/actions"
import { Container, Box, Button } from "@material-ui/core"
import { Pagination } from "@material-ui/lab"
import { Icon } from "@iconify/react"
import DogIcon from "@iconify/icons-whh/dog"
import Head from "../components/head"
import Heading from "../components/homeHeading"
import ArticleCard from "../components/ArticleCard"
import text from "../components/text"

const Index = props => {
  const { language, currentPage, numPages } = props.pageContext
  useEffect(() => {
    props.dispatch(setLanguage(language))
    props.dispatch(setRedirect("/"))
    //eslint-disable-next-line
  }, [])
  const title = text.labelHome[language]
  const articles = props.data.allFile.edges.map(i => {
    const article = i.node.childMarkdownRemark
    return {
      id: article.id,
      title: article.frontmatter.title,
      body: article.html,
      image: article.frontmatter.featured_image.childImageSharp.fixed.src,
      date: article.frontmatter.date,
      slug: article.fields.slug,
      excerpt: article.excerpt,
    }
  })
  const handleClick = (e, v) => {
    if (v === 1) {
      navigate(`/${language}`)
    } else {
      navigate(`/${language}/${v}`)
    }
  }
  return (
    <>
      <Head
        lang={language}
        title={title}
        description={`${text.homeHeading[language]} - ${text.homeSubheading[language]}`}
        titleOverride
      />
      <Container>
        <Heading
          heading={text.homeHeading[language]}
          subheading={text.homeSubheading[language]}
        />
        {currentPage === 1 ? (
          <Box mb={2} align="center">
            <Button
              onClick={() => {
                navigate(`/${language}/the-dogs`)
              }}
              variant="contained"
              color="secondary"
              style={{ color: "white" }}
              endIcon={<Icon icon={DogIcon} />}
            >
              {text.showMeTheDogs[language]}
            </Button>
          </Box>
        ) : (
          <Pagination
            count={numPages}
            page={currentPage}
            onChange={handleClick}
            style={{
              marginBottom: ".35rem",
              display: "flex",
              justifyContent: "center",
            }}
          />
        )}
        {articles.map(i => (
          <ArticleCard
            key={i.id}
            title={i.title}
            body={i.body}
            image={i.image}
            date={i.date}
            slug={i.slug}
            excerpt={i.excerpt}
          />
        ))}
        <Pagination
          count={numPages}
          page={currentPage}
          onChange={handleClick}
          style={{ display: "flex", justifyContent: "center" }}
        />
      </Container>
    </>
  )
}

export const homeQuery = graphql`
  query homeQuery($skip: Int!, $limit: Int!, $language: String!) {
    allFile(
      limit: $limit
      skip: $skip
      filter: {
        sourceInstanceName: { eq: "articles" }
        extension: { eq: "md" }
        childMarkdownRemark: { frontmatter: { language: { eq: $language } } }
      }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          childMarkdownRemark {
            fields {
              slug
            }
            id
            frontmatter {
              title
              language
              featured_image {
                childImageSharp {
                  fixed(width: 845) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              date
            }
            html
            excerpt(pruneLength: 400)
          }
        }
      }
    }
  }
`

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(Index)
