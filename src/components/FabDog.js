import React from "react"
import { connect } from "react-redux"
import { navigate } from "gatsby"
import { Fab, Hidden } from "@material-ui/core"
import { Icon } from "@iconify/react"
import DogIcon from "@iconify/icons-whh/dog"

const FabDog = props => {
  const handleClick = () => {
    navigate(`/${props.lang}/the-dogs`)
  }
  return (
    <Hidden mdUp>
      <Fab
        onClick={handleClick}
        color="secondary"
        size="small"
        style={{
          position: "fixed",
          bottom: "3.5rem",
          right: ".5rem",
          zIndex: 1100,
        }}
      >
        <Icon icon={DogIcon} style={{ color: "white" }} />
      </Fab>
    </Hidden>
  )
}

const mapStateToProps = state => ({
  lang: state.siteLang,
})

export default connect(mapStateToProps)(FabDog)
