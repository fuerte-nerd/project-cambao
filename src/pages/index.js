import React from "react"
import { useMediaQuery, useTheme } from "@material-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/index/Heading"
import ArticleCard from "../components/index/ArticleCard"

const IndexPage = () => {
  const theme = useTheme()
  const isNotMobile = useMediaQuery(theme.breakpoints.up("sm"))
  return (
    <Layout>
      <SEO title="Home" />
      <Heading />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </Layout>
  )
}
export default IndexPage
