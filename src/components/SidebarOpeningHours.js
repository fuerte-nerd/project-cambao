import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@material-ui/core"
import SidebarSectionTitle from "./SidebarSectionTitle"

const SidebarOpeningHours = () => {
  return (
    <Box>
      <SidebarSectionTitle title="Opening hours" />
      <Typography display="block" variant="caption">
        Thu
      </Typography>
      <Typography display="block">8-9:30</Typography>
      <Typography display="block" variant="caption">
        Sat & Sun
      </Typography>
      <Typography display="block">9-10:30</Typography>
      <Typography display="block" variant="caption">
        Holidays
      </Typography>
      <Typography display="block">9-10:30</Typography>
    </Box>
  )
}

export default SidebarOpeningHours
