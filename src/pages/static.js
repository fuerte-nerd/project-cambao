import React from "react"
import { Box } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"

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
    <Box>
      <Box>Hello</Box>
    </Box>
  )
}

export default Static
