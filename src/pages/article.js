import React from "react"
import {
  Container,
  Grid,
  Box,
  IconButton,
  Typography,
  Divider,
} from "@material-ui/core"
import { Facebook, WhatsApp, Email } from "@material-ui/icons"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Article = () => {
  const data = useStaticQuery(graphql`
    {
      dog1: file(name: { eq: "test" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 400, quality: 15) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dog2: file(name: { eq: "test" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 450, quality: 15) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Box>
      <Grid container spacing={2} alignItems="flex-end">
        <Grid item xs={12}>
          <Box bgcolor="#fafafa" boxShadow={2}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                md={5}
                style={{ paddingTop: 0, paddingBottom: 0 }}
              >
                <Img fluid={data.dog1.childImageSharp.fluid} />
              </Grid>
              <Grid item xs={12} md={7} style={{ padding: "1rem" }}>
                <Box
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography variant="h2">
                      This is the article heading
                    </Typography>
                    <Typography variant="subtitle1">12 April 2020</Typography>
                    <Typography variant="subtitle2">Posted by FDR</Typography>
                  </Box>
                  <Box>
                    <IconButton color="secondary">
                      <Facebook />
                    </IconButton>
                    <IconButton color="secondary">
                      <WhatsApp />
                    </IconButton>
                    <IconButton color="secondary">
                      <Email />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box color="#fafafa">
            <Container>
              <Typography>
                Consectetur aperiam fuga quod quo ea? Ab unde quos fuga corrupti
                qui recusandae vero soluta recusandae. Ipsum minima quibusdam
                placeat repellendus eaque Aliquam ullam velit sint vel ipsam
                Aperiam neque laborum ad consectetur eius Iste nam eius nesciunt
                ut consectetur! Quibusdam iusto laboriosam eos nulla eos. Unde
                vero aspernatur beatae?
              </Typography>
              <Box py={2} maxWidth={400} margin="auto">
                <Img fluid={data.dog2.childImageSharp.fluid} />
              </Box>
              <Typography>
                Lorem ut unde laborum similique nisi laboriosam facilis nisi
                provident Totam amet molestias veniam laudantium modi Culpa
                eligendi ea dicta illum iure Numquam unde blanditiis fugit
                facere perferendis? Dolore possimus pariatur fugit laborum
                aliquid totam. Eius possimus sint vero numquam repellendus
                Officia voluptas magni labore architecto dolore in Aliquid
                deleniti voluptatem blanditiis officia eaque maxime architecto
                recusandae Beatae recusandae aliquid a molestias doloremque non?
                Labore aliquam saepe nihil voluptas consequatur Maiores veniam
                ipsa itaque voluptatem
              </Typography>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Article
