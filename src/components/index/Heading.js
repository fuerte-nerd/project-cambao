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
          fluid(maxWidth: 205, maxHeight: 205) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Box
      display="flex"
      justifyContent="center"
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
      <Box ml={isNotMobile ? 2 : 0} mt={isNotMobile ? 0 : 1} align="center">
        <Box color="white">
          <Typography variant="h3">We are their voice!</Typography>
        </Box>
        <Container>
          <Box>
            <Typography variant="subtitle1">
              Taking care of the abandoned and mistreated dogs of the La Oliva
              area in Fuerteventura since 2013
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Heading
