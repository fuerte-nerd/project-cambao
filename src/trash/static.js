import React from "react"
import { Container, Box, Grid, Typography } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Static = () => {
  const data = useStaticQuery(graphql`
    {
      dog1: file(name: { eq: "test" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 400, quality: 15) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <Box mb={2} color="white">
        <Typography variant="h2">Page Title</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={5}>
          <Img fluid={data.dog1.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={12} md={6} lg={7}>
          Consectetur ducimus laudantium assumenda doloremque est! Laboriosam
          iste voluptas earum distinctio sint? Repellendus eligendi non repellat
          praesentium dignissimos? At repellendus impedit aliquam aspernatur
          molestiae Quis sapiente asperiores quibusdam similique officiis Aut
          rem iure placeat pariatur itaque officia veritatis? Harum provident
          accusantium voluptas praesentium velit. Quidem explicabo rerum totam
          asperiores dolores. Inventore quidem impedit aliquid consequuntur ad.
          Odio quisquam placeat vitae iure placeat qui? Hic aliquid?
        </Grid>
      </Grid>
      <Box>
        <Typography></Typography>
      </Box>
    </Container>
  )
}

export default Static
