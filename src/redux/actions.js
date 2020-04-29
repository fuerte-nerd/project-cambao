import { SET_NAV } from "./types"

export const setNav = navState => ({
  type: SET_NAV,
  payload: navState,
})
