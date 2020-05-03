import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/index/Heading"
import ArticleCard from "../components/index/ArticleCard"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Heading />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </Layout>
  )
}
export default IndexPage
