import React from "react"
import wrapWithProvider from "./wrap-with-provider"
import Layout from "./src/components/layout"

export const wrapRootElement = wrapWithProvider

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
