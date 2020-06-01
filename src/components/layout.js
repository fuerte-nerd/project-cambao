import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setLanguageRedirectDialog } from "../redux//actions"
import detectBrowserLanguage from "detect-browser-language"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { navigate, useStaticQuery, graphql } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"

import {
  CircularProgress,
  Box,
  Grid,
  Hidden,
  Toolbar,
  CssBaseline,
  useTheme,
  useMediaQuery,
} from "@material-ui/core"

import { ThemeProvider } from "@material-ui/core/styles"
import siteTheme from "./theme"

import SharePopup from "./SharePopup"
import LanguageRedirectDialog from "./LanguageRedirectDialog"
import NoticeDialog from "./NoticeDialog"
import LanguageDialog from "./LanguageDialog"
import DonateDialog from "./DonateDialog"
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

  let { lang } = props

  useEffect(() => {
    if (lang) {
      const langPref = localStorage.getItem("fdr_lang_pref")
      if (langPref) {
        console.log(langPref)
        if (window.location.pathname === "/") {
          navigate(`/${langPref}/`)
        } else {
          setTimeout(() => {
            if (langPref !== lang) {
              console.log(`langPref = ${langPref}`)
              console.log(`props.lang = ${lang}`)
              console.log("reached")
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
              if (browserLang !== lang) {
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
    //eslint-disable-next-line
  }, [lang])

  return (
    <ThemeProvider theme={siteTheme}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Sniglet&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <CssBaseline>
        {window.location.pathname === "/" ? (
          <Box
            position="fixed"
            top={0}
            left={0}
            height="100vh"
            width="100vw"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <CircularProgress size={80} />
          </Box>
        ) : null}
        <NoticeDialog />
        <LanguageRedirectDialog />
        <LanguageDialog />
        <DonateDialog />
        <SharePopup />
        <Navbar siteTitle={data.site.siteMetadata.title} />
        <NavMenu />
        <Box
          bgcolor="primary.main"
          width="100%"
          minHeight="100vh"
          component="main"
        >
          <Toolbar />
          <Grid container>
            <Hidden smDown>
              <Sidebar />
            </Hidden>
            <Grid item xs={12} md={10} justify="center">
              <Box mx={isNotMobile ? 3 : 1} my={isNotMobile ? 3 : 2}>
                <AnimatePresence>
                  <motion.main
                    key={props.location.pathname}
                    variants={variants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    {props.children}
                  </motion.main>
                </AnimatePresence>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapStateToProps = state => ({
  lang: state.siteLang,
  redirectUrl: state.redirect,
})

export default connect(mapStateToProps)(Layout)
