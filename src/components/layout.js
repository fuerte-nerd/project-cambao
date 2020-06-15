import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setLanguageRedirectDialog, setSiteReady } from "../redux/actions"
import detectBrowserLanguage from "detect-browser-language"
import PropTypes from "prop-types"
import { navigate, useStaticQuery, graphql } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"

import {
  LinearProgress,
  Box,
  Grid,
  Hidden,
  Toolbar,
  useTheme,
  useMediaQuery,
} from "@material-ui/core"

import ShareDialog from "./ShareDialog"
import LanguageRedirectDialog from "./LanguageRedirectDialog"
import NoticeDialog from "./NoticeDialog"
import LanguageDialog from "./LanguageDialog"
import DonateDialog from "./DonateDialog"
import FabDonate from "./FabDonate"
import Navbar from "./Navbar"
import NavMenu from "./NavMenu"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const duration = 0.25

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

const Layout = props => {
  const theme = useTheme()
  const isNotMobile = useMediaQuery(theme.breakpoints.up("sm"))
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          supportedLanguages
        }
      }
    }
  `)

  useEffect(() => {
    if (props.lang) {
      const langPref = localStorage.getItem("fdr_lang_pref")
      if (langPref) {
        if (window.location.pathname === "/") {
          navigate(`/${langPref}/`)
        } else {
          setTimeout(() => {
            if (langPref !== props.lang) {
              props.dispatch(
                setLanguageRedirectDialog({ visible: true, lang: langPref })
              )
            }
          }, 3000)
        }
      } else {
        const browserLang = detectBrowserLanguage().toLowerCase().substr(0, 2)
        if (data.site.siteMetadata.supportedLanguages.includes(browserLang)) {
          if (window.location.pathname === "/") {
            navigate(`/${browserLang}/`)
          } else {
            setTimeout(() => {
              if (browserLang !== props.lang) {
                props.dispatch(
                  setLanguageRedirectDialog({ visible: true, lang: langPref })
                )
              }
            }, 3000)
          }
        }
        localStorage.setItem("fdr_lang_pref", browserLang)
      }
    }
    if (!props.siteReady) {
      props.dispatch(setSiteReady(true))
    }
    //eslint-disable-next-line
  }, [props.lang])

  return props.siteReady ? (
    <>
      {typeof window !== `undefined` ? (
        window.location.pathname === "/" ? (
          <SiteLoadOverlay />
        ) : null
      ) : null}
      <NoticeDialog />
      <LanguageRedirectDialog />
      <LanguageDialog />
      <DonateDialog />
      <ShareDialog />
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <NavMenu />
      <Box
        bgcolor="primary.main"
        width="100%"
        minHeight="100vh"
        component="main"
      >
        <FabDonate />
        <Toolbar />
        <Grid container>
          <Hidden smDown>
            <Sidebar />
          </Hidden>
          <Grid item xs={12} md={10}>
            <Box mx={isNotMobile ? 3 : 1} my={isNotMobile ? 3 : 2}>
              <AnimatePresence>
                {typeof window !== `undefined` ? (
                  <motion.main
                    key={window.location.pathname}
                    variants={variants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    {" "}
                    {props.children}
                  </motion.main>
                ) : null}
              </AnimatePresence>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </>
  ) : null
}

const SiteLoadOverlay = () => (
  <Box
    position="fixed"
    bgcolor="primary.light"
    zIndex={10000}
    top={0}
    left={0}
    height="100vh"
    width="100vw"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Box width="70%" maxWidth={750}>
      <LinearProgress color="secondary" />
    </Box>
  </Box>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapStateToProps = state => ({
  lang: state.siteLang,
  redirectUrl: state.redirect,
  siteReady: state.siteReady,
})

export default connect(mapStateToProps)(Layout)
