import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTheme, useMediaQuery, Box, Typography } from "@material-ui/core"
import Img from "gatsby-image"

const Heading = props => {
  const theme = useTheme()
  const isNotMobile = useMediaQuery(theme.breakpoints.up("sm"))
  const data = useStaticQuery(graphql`
    {
      logo: file(name: { eq: "logo" }) {
        childImageSharp {
          fluid(maxWidth: 205, maxHeight: 205, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection={isNotMobile ? "row" : "column"}
      mb={2}
      width="100%"
    >
      <Img
        fluid={data.logo.childImageSharp.fluid}
        style={{
          width: "100%",
          maxWidth: 150,
        }}
      />
      <Box mt={isNotMobile ? 0 : 1} align={isNotMobile ? "right" : "center"}>
        <Box color="white">
          <Typography variant="h2" variantMapping={{ h1: "h2" }}>
            {props.heading}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1">{props.subheading}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Heading
