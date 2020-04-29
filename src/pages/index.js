import React from "react"
import { Link } from "gatsby"
import { Paper, Box, Typography, Button, Container } from "@material-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box
      bgcolor="primary.main"
      minWidth="100vw"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Container>
        <Paper>
          <Container>
            <Typography>Hello</Typography>
          </Container>
        </Paper>
      </Container>
    </Box>
  </Layout>
)

export default IndexPage
