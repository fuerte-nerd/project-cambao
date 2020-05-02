import { useMediaQuery } from "@material-ui/core"

export const isLandscapeMobile = useMediaQuery(
  "(max-width:800px) and (orientation: landscape)"
)
