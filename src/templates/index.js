import React from "react"
import { graphql, navigate } from "gatsby"
import { connect } from "react-redux"
import { setRedirect, setLanguage } from "../redux/actions"
import Head from "../components/head"
import Heading from "../components/index/Heading"
import { Container, Box } from "@material-ui/core"
import { Pagination } from "@material-ui/lab"
import ArticleCard from "../components/index/ArticleCard"

const Index = props => {
  props.dispatch(setLanguage(props.pageContext.language))
  props.dispatch(setRedirect("/"))
  const articles = props.data.allFile.edges.map(i => {
    const article = i.node.childMarkdownRemark
    return {
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
      navigate(`/${props.lang}`)
    } else {
      navigate(`/${props.lang}/${v}`)
    }
  }
  const text = {
    heading: { en: "We are their voice!", es: "¡Somos su voz!" },
    subheading: {
      en:
        "Taking care of the abandoned and mistreated dogs from the La Oliva area of Fuerteventura since 2013.",
      es:
        "Cuidando de los perros abandonados y maltratados de la zona de La Oliva en Fuerteventura desde 2013.",
    },
    seo_title: { en: "Home", es: "Iniciar" },
  }
  return (
    <>
      <Head
        lang={props.pageContext.language}
        title={text.seo_title[props.lang]}
        description={`${text.heading[props.lang]} - ${
          text.subheading[props.lang]
        }`}
      />
      <Heading
        heading={text.heading[props.lang]}
        subheading={text.subheading[props.lang]}
      />
      <Container>
        {articles.map(i => (
          <ArticleCard
            title={i.title}
            body={i.body}
            image={i.image}
            date={i.date}
            slug={i.slug}
            excerpt={i.excerpt}
          />
        ))}
      </Container>
      <Pagination
        count={props.pageContext.numPages}
        page={props.pageContext.currentPage}
        onChange={handleClick}
        style={{ justifyContent: "center" }}
      />
    </>
  )
}

export const articleListQuery = graphql`
  query articleListQuery($skip: Int!, $limit: Int!, $language: String!) {
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
            }
            html
            excerpt(pruneLength: 250)
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
