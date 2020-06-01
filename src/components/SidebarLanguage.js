import React from "react"
import { connect } from "react-redux"
import SidebarSectionTitle from "./SidebarSectionTitle"
import LanguageSelector from "./LanguageSelector"

const SidebarLanguage = props => {
  const text = {
    siteLang: { en: "Site language", es: "Idioma del sitio" },
  }
  return (
    <>
      <SidebarSectionTitle title={text.siteLang[props.lang]} top />
      <LanguageSelector fullWidth />
    </>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(SidebarLanguage)
