import React from "react"
import DogProfileExpansionPanel from "./DogProfileExpansionPanel"

const DogProfileVideo = props => {
  return (
    <DogProfileExpansionPanel title="Video" headingVariant="h6" youtube>
      <iframe
        title="Video of dog"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/DgAw6jFo6Mw"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></iframe>
    </DogProfileExpansionPanel>
  )
}

export default DogProfileVideo
