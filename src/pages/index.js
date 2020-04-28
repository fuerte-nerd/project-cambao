import React from "react"
import { Link } from "gatsby"
import { Box, Typography, Button } from "@material-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box
      bgcolor="primary.light"
      minWidth="100vw"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Typography></Typography>
      </Box>
      <Box>
        <Typography></Typography>
        <Typography></Typography>
        <Button></Button>
      </Box>
    </Box>
  </Layout>
)

export default IndexPage
