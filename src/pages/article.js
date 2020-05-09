import React from "react"
import {
  useTheme,
  useMediaQuery,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Box,
  IconButton,
  Typography,
  Divider,
} from "@material-ui/core"
import { Facebook, Twitter, WhatsApp, Email } from "@material-ui/icons"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Article = () => {
  const theme = useTheme()
  const xsDown = theme.breakpoints.down("xs")

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
      <Container>
        <Card>
          <CardActionArea>
            <Grid container>
              <Grid item xs={12} md={6} lg={5}>
                <CardMedia
                  image={data.dog1.childImageSharp.fluid.src}
                  style={{ width: "100%", height: 400 }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={5}>
                <CardContent>
                  <Typography variant="h2">
                    This is the article heading
                  </Typography>
                  <Typography variant="overline">
                    Posted on 12 April 2020 by FDR
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </CardActionArea>
          <CardActions
            style={{ background: theme.palette.secondary.main, color: "white" }}
          >
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <Twitter />
            </IconButton>
            <IconButton color="inherit">
              <WhatsApp />
            </IconButton>
            <IconButton color="inherit">
              <Email />
            </IconButton>
          </CardActions>
        </Card>

        <Box color="#fafafa">
          <Typography paragraph>
            Consectetur aperiam fuga quod quo ea? Ab unde quos fuga corrupti qui
            recusandae vero soluta recusandae. Ipsum minima quibusdam placeat
            repellendus eaque Aliquam ullam velit sint vel ipsam Aperiam neque
            laborum ad consectetur eius Iste nam eius nesciunt ut consectetur!
            Quibusdam iusto laboriosam eos nulla eos. Unde vero aspernatur
            beatae?
          </Typography>
          <Box pt={2} pb={4} maxWidth={400} margin="auto">
            <Img fluid={data.dog2.childImageSharp.fluid} />
          </Box>
          <Typography paragraph>
            Lorem ut unde laborum similique nisi laboriosam facilis nisi
            provident Totam amet molestias veniam laudantium modi Culpa eligendi
            ea dicta illum iure Numquam unde blanditiis fugit facere
            perferendis? Dolore possimus pariatur fugit laborum aliquid totam.
            Eius possimus sint vero numquam repellendus Officia voluptas magni
            labore architecto dolore in Aliquid deleniti voluptatem blanditiis
            officia eaque maxime architecto recusandae Beatae recusandae aliquid
            a molestias doloremque non? Labore aliquam saepe nihil voluptas
            consequatur Maiores veniam ipsa itaque voluptatem
          </Typography>
          <Typography paragraph>
            Dolor inventore iure placeat nemo ipsa! Quaerat id neque voluptates
            unde ipsum iste? Voluptate aliquid voluptatum itaque fugiat nobis.
            Reiciendis quaerat ratione soluta reprehenderit maiores? Iure sed
            maiores possimus praesentium similique Laborum aliquam impedit
            aliquid quos omnis Qui eos corrupti nobis eligendi natus Aperiam
            incidunt earum assumenda ab ad Modi iusto neque dolore aliquam
            ducimus Repellendus iure impedit vero expedita non Cum culpa
            reiciendis minus temporibus tempora sed dignissimos mollitia Quae
            vero aliquam dolor perferendis recusandae fugiat quibusdam. Labore
            vero fuga voluptates aliquam dolores Soluta dolore odit ad voluptas
            voluptas Vero perferendis vitae nesciunt laudantium distinctio
            temporibus! Ipsum ab quo nulla obcaecati assumenda odit expedita
            quas? Nobis voluptatum animi tenetur delectus nihil? Eligendi dicta
            fugit consequatur animi animi ab. Magni soluta qui iste doloribus
            praesentium? Libero ab harum doloremque pariatur exercitationem Ut
            tenetur laboriosam vel tenetur ratione harum Quod provident
            architecto ducimus nam rem amet Veniam quo porro laborum quod
            blanditiis Harum laudantium corporis illum necessitatibus et?
            Doloribus tenetur cumque aspernatur provident hic voluptas Hic
            dolores laborum numquam voluptatibus ut, ex Quibusdam tenetur nam
            fugiat dignissimos maxime! Ratione provident nesciunt quisquam
            labore expedita Harum explicabo inventore sint corrupti labore
            Molestiae tempore consequuntur nemo labore ipsa fugiat. Nam non ex
            eligendi.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Article
