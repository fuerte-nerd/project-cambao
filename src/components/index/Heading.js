import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  useTheme,
  useMediaQuery,
  Container,
  Box,
  Typography,
} from "@material-ui/core"
import Img from "gatsby-image"

const Heading = () => {
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
    <Container>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="space-between"
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
        <Box ml={isNotMobile ? 2 : 0} mt={isNotMobile ? 0 : 1} align="center">
          <Box color="white">
            <Typography variant="h1" variantMapping={{ h1: "h2" }}>
              We are their voice!
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">
              Taking care of the abandoned and mistreated dogs of the La Oliva
              area in Fuerteventura since 2013
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Heading
