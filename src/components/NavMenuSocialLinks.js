import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import { makeStyles, Box } from "@material-ui/core"
import { Facebook, Instagram } from "@material-ui/icons"
import { FacebookMessenger } from "mdi-material-ui"
import NavMenuSocialLinksItem from "./NavMenuSocialLinksItem"

const useStyles = makeStyles(theme => ({
  socialButton: {
    fontSize: "2.4rem",
  },
}))

const text = {
  facebook: {
    en: "Visit us on Facebook",
    es: "Visítanos en Facebook",
  },
  instagram: {
    en: "Visit us on Instagram",
    es: "Visítanos en Instagram",
  },
  messenger: {
    en: "Contact us on Messenger",
    es: "Contáctenos en el Messenger",
  },
}
const NavMenuSocialLinks = props => {
  const data = useStaticQuery(graphql`
    {
      file(
        name: { eq: "links" }
        sourceInstanceName: { eq: "static_content" }
      ) {
        childMarkdownRemark {
          frontmatter {
            facebook
            instagram
          }
        }
      }
    }
  `)
  const { facebook, instagram } = data.file.childMarkdownRemark.frontmatter
  const classes = useStyles()
  return (
    <Box>
      <NavMenuSocialLinksItem
        tooltip={text.messenger[props.lang]}
        id="messenger"
        username={facebook}
      >
        <FacebookMessenger className={classes.socialButton} />
      </NavMenuSocialLinksItem>
      <NavMenuSocialLinksItem
        tooltip={text.facebook[props.lang]}
        id="facebook"
        username={facebook}
      >
        <Facebook className={classes.socialButton} />
      </NavMenuSocialLinksItem>
      <NavMenuSocialLinksItem
        end
        tooltip={text.instagram[props.lang]}
        id="instagram"
        username={instagram}
      >
        <Instagram className={classes.socialButton} />
      </NavMenuSocialLinksItem>
    </Box>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(NavMenuSocialLinks)
