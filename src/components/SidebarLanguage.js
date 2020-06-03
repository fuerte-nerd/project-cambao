import React from "react"
import { connect } from "react-redux"
import SidebarSectionTitle from "./SidebarSectionTitle"
import LanguageSelector from "./LanguageSelector"
import text from "./text"

const SidebarLanguage = props => {
  return (
    <>
      <SidebarSectionTitle title={text.siteLanguageHeading[props.lang]} top />
      <LanguageSelector fullWidth />
    </>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(SidebarLanguage)
