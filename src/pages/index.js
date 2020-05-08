import React from "react"
import { Container } from "@material-ui/core"
import SEO from "../components/seo"
import Heading from "../components/index/Heading"
import ArticleCard from "../components/index/ArticleCard"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Heading />
      <Container>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </Container>
    </>
  )
}
export default IndexPage
