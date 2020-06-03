import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import { makeStyles, Box } from "@material-ui/core"
import { Facebook, Instagram } from "@material-ui/icons"
import { FacebookMessenger } from "mdi-material-ui"
import NavMenuSocialLinksItem from "./NavMenuSocialLinksItem"
import text from "./text"

const useStyles = makeStyles(theme => ({
  socialButton: {
    fontSize: "2.4rem",
  },
}))

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
        tooltip={text.messengerTooltip[props.lang]}
        id="messenger"
        username={facebook}
      >
        <FacebookMessenger className={classes.socialButton} />
      </NavMenuSocialLinksItem>
      <NavMenuSocialLinksItem
        tooltip={text.facebookTooltip[props.lang]}
        id="facebook"
        username={facebook}
      >
        <Facebook className={classes.socialButton} />
      </NavMenuSocialLinksItem>
      <NavMenuSocialLinksItem
        end
        tooltip={text.instagramTooltip[props.lang]}
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
