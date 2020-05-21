import React from "react"
import { connect } from "react-redux"
import { setRedirect } from "../redux/actions"
import Head from "../components/head"
import SEO from "../components/seo"
import Heading from "../components/index/Heading"
import { Container } from "@material-ui/core"
import ArticleCard from "../components/index/ArticleCard"

const Index = props => {
  props.dispatch(setRedirect("/"))
  return (
    <>
      <Head
        title={props.seo_title}
        description={`$props.heading - ${props.subheading}`}
      />
      {/*<SEO title={props.seo_title} />*/}
      <Heading heading={props.heading} subheading={props.subheading} />
      <Container>
        {props.articles.map(i => (
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
    </>
  )
}

export default connect()(Index)
