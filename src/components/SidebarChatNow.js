import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import { setNoticeDialog } from "../redux/actions"
import { Box, Typography, Button, Link } from "@material-ui/core"
import { FacebookMessenger } from "mdi-material-ui"
import { Email } from "@material-ui/icons"
import SidebarSectionTitle from "./SidebarSectionTitle"
import text from "./text"

const SidebarChatNow = props => {
  const { lang } = props
  const data = useStaticQuery(graphql`
    {
      notice: file(
        name: { eq: "lostorabandoned" }
        sourceInstanceName: { eq: "static_content" }
      ) {
        childMarkdownRemark {
          frontmatter {
            en
            es
          }
        }
      }
      links: file(
        name: { eq: "links" }
        sourceInstanceName: { eq: "static_content" }
      ) {
        childMarkdownRemark {
          frontmatter {
            facebook
            email
          }
        }
      }
    }
  `)

  const handleClick = e => {
    switch (e.currentTarget.id) {
      case "report":
        return props.dispatch(
          setNoticeDialog({
            visible: true,
            heading: text.reportLostHeading[lang],
            body: data.notice.childMarkdownRemark.frontmatter[lang],
            btnText: text.close[lang],
          })
        )
      case "messenger":
        return window.open(
          `http://m.me/${data.links.childMarkdownRemark.frontmatter.facebook}`,
          "_blank"
        )
      case "email":
        return window.open(
          `mailto:${data.links.childMarkdownRemark.frontmatter.email}`,
          "_blank"
        )
      default:
        return
    }
  }

  return (
    <Box>
      <SidebarSectionTitle title={text.chatNowHeading[lang]} />
      <Typography variant="caption">{text.chatNowIntro[lang]}</Typography>
      <Button
        fullWidth
        variant="contained"
        size="small"
        startIcon={<FacebookMessenger />}
        id="messenger"
        onClick={handleClick}
      >
        Messenger
      </Button>
      <Button
        fullWidth
        variant="contained"
        size="small"
        startIcon={<Email />}
        style={{ marginTop: ".25rem" }}
        id="email"
        onClick={handleClick}
      >
        {text.email[lang]}
      </Button>
      <Typography variant="caption" align="justify">
        {text.reportLostQuestion[lang]}
        {` `}
        <Link onClick={handleClick} id="report" color="inherit">
          <strong style={{ cursor: "pointer" }}>{text.click[lang]}</strong>
        </Link>
        .
      </Typography>
    </Box>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(SidebarChatNow)
