import React from "react"
import { connect } from "react-redux"
import { Box, Typography } from "@material-ui/core"
import DogProfileExpansionPanel from "./DogProfileExpansionPanel"
import text from "./text"

const DogProfileVideo = props => {
  return (
    <DogProfileExpansionPanel
      title={text.video[props.lang]}
      headingVariant="h6"
      expanded
      youtube
    >
      {props.url ? (
        <iframe
          title="Video of dog"
          width="560"
          height="315"
          src={`http://youtube.com/embed/${props.url}`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      ) : (
        <Box width="100%" align="center">
          <Typography>{text.sorryNoVideo[props.lang]} </Typography>
        </Box>
      )}
    </DogProfileExpansionPanel>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(DogProfileVideo)
