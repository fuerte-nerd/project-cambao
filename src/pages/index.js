import React from "react"
import { Link } from "gatsby"
import {
  Paper,
  Box,
  Grid,
  Typography,
  Button,
  Container,
} from "@material-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box
      bgcolor="secondary.main"
      minWidth="100vw"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid container>
        <Grid item xs={12} md={6}></Grid>

        <Grid item xs={12} md={6}>
          <Container>
            <Paper>
              <Box p={3}>
                <Typography>Hello</Typography>
              </Box>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </Box>
  </Layout>
)

export default IndexPage
