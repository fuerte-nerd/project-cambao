import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Box, AppBar, Toolbar, IconButton, Typography } from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import Img from "gatsby-image"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "logo" }, sourceInstanceName: { eq: "images" }) {
        childImageSharp {
          fixed(height: 70, width: 70) {
            ...GatsbyImageSharpFixed
          }
        }
        sourceInstanceName
      }
    }
  `)
  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <Menu />
        </IconButton>
        <Box my={1}>
          <Img fixed={data.file.childImageSharp.fixed} />
        </Box>
        <Typography variant="h5" variantMapping={{ h5: "h1" }}>
          FDR
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
