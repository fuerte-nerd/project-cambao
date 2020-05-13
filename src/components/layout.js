import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setLanguage } from "../redux/actions"
import { getUserLocales } from "get-user-locale"
import { useLocation } from "@reach/router"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"

import {
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

import Navbar from "./Navbar"
import NavMenu from "./NavMenu"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const duration = 0.5

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
  const location = useLocation()
  useEffect(() => {
    const preferredLanguage = localStorage.getItem("fdr_lang_pref")
    if (preferredLanguage && preferredLanguage !== props.lang) {
      if (
        data.siteTitle.siteMetadata.supportedLanguages.includes(
          preferredLanguage
        )
      ) {
        props.dispatch(setLanguage(preferredLanguage))
        const strippedPath = location.pathname.match(/\/[^\/]*$/g)[0]
        if (preferredLanguage !== "en") {
          navigate(`/${preferredLanguage + strippedPath}`)
        } else {
          navigate(strippedPath)
        }
      }
    } else {
      const locales = getUserLocales()
      for (let i = 0; i < locales.length; i++) {
        if (
          data.siteTitle.siteMetadata.supportedLanguages.includes(locales[i])
        ) {
          localStorage.setItem("fdr_lang_pref", locales[i])
          props.dispatch(setLanguage(locales[i]))
          const strippedPath = location.pathname.match(/\/[^\/]*$/g)[0]
          if (preferredLanguage !== "en") {
            navigate(`/${preferredLanguage + strippedPath}`)
          } else {
            navigate(strippedPath)
          }
          break
        }
      }
    }
  }, [])
  const theme = useTheme()
  const isNotMobile = useMediaQuery(theme.breakpoints.up("sm"))
  const data = useStaticQuery(graphql`
    {
      siteTitle: site {
        siteMetadata {
          title
          supportedLanguages
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={siteTheme}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Sniglet&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <CssBaseline>
        <Navbar siteTitle={data.siteTitle.siteMetadata.title} />
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
})

export default connect(mapStateToProps)(Layout)
