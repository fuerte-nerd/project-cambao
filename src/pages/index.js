import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setLanguage } from "../redux/actions"
import Head from "../components/head"

const IndexPage = props => {
  useEffect(() => {
    const storedLang = localStorage.getItem("fdr_lang_pref")

    props.dispatch(setLanguage(storedLang ? storedLang : "es"))
    //eslint-disable-next-line
  }, [])
  return (
    <Head
      lang="es"
      title="El sitio web oficial"
      description="Cuidando de los perros abandonados y maltratados de la zona de La Oliva en Fuerteventura desde 2013."
    />
  )
}

export default connect()(IndexPage)
