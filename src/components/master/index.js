import React from "react"
import SEO from "../seo"
import Heading from "../index/Heading"
import { Container } from "@material-ui/core"
import ArticleCard from "../index/ArticleCard"

const Index = props => {
  return (
    <>
      <SEO title={props.seo_title} />
      <Heading heading={props.heading} subheading={props.subheading} />
      <Container>
        {props.articles.map(i => (
          <ArticleCard
            title={i.title}
            body={i.body}
            image={i.image}
            date={i.date}
          />
        ))}
      </Container>
    </>
  )
}

export default Index