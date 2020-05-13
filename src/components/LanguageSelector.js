import React from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import { setLanguage } from "../redux/actions"
import { useLocation } from "@reach/router"
import { Hidden, Tooltip, Button, ButtonGroup } from "@material-ui/core"

const LanguageSelector = props => {
  const location = useLocation()
  const handleClick = e => {
    const f = e.currentTarget
    localStorage.setItem("fdr_lang_pref", f.id)
    const strippedPath = location.pathname.match(/\/[^\/]*$/g)[0]

    if (f.id !== props.lang) {
      props.dispatch(setLanguage(f.id))
      if (f.id === "en") {
        return navigate(`${strippedPath}`)
      } else {
        return navigate(`/${f.id + strippedPath}`)
      }
    }
  }
  return (
    <>
      <Hidden smUp>
        <Tooltip title="Tap to change">
          <Button size="small" color="inherit" variant="outlined">
            Language: Eng
          </Button>
        </Tooltip>
      </Hidden>
      <Hidden xsDown>
        <ButtonGroup size="small" disableElevation>
          <Button
            id="en"
            onClick={handleClick}
            variant={props.lang === "en" ? "contained" : "outlined"}
          >
            EN
          </Button>
          <Button
            id="es"
            onClick={handleClick}
            variant={props.lang === "es" ? "contained" : "outlined"}
          >
            ES
          </Button>
          <Button>DE</Button>
          <Button>IT</Button>
          <Button>FR</Button>
        </ButtonGroup>
      </Hidden>
    </>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(LanguageSelector)
