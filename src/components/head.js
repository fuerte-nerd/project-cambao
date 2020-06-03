/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import defaultOG from "../images/def_og.png"

function Head(props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description {
              en
              es
            }
            url
          }
        }
      }
    `
  )

  const metaDescription =
    props.description || site.siteMetadata.description[props.lang]

  const metaOGImage = props.ogImage || defaultOG

  return (
    <Helmet
      htmlAttributes={{
        lang: props.lang,
      }}
      title={`${props.title} | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: props.titleOverride
            ? site.siteMetadata.title
            : `${props.title} | ${site.siteMetadata.title}`,
        },
        {
          property: `og:image`,
          content: site.siteMetadata.url + metaOGImage,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.url,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.title,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
      ].concat(props.meta)}
    />
  )
}

Head.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}
const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(Head)
