import React from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import { Hidden, Tooltip, Button, ButtonGroup } from "@material-ui/core"

const LanguageSelector = props => {
  const handleClick = e => {
    const f = e.currentTarget
    localStorage.setItem("fdr_lang_pref", f.id)
    return navigate(`/${f.id + props.redirectUrl}`)
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
  redirectUrl: state.redirect,
})

export default connect(mapStateToProps)(LanguageSelector)
