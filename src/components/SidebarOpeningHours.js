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
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Thu</TableCell>
              <TableCell>8:00 - 9:30</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sat & Sun</TableCell>
              <TableCell>9:00 - 10:30</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Holidays</TableCell>
              <TableCell>9:00 - 10:30</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography display="block">Thu 8-9:30</Typography>
      <Typography display="block">Sat 9-10:30</Typography>
      <Typography display="block">Sun 9-10:30</Typography>
    </Box>
  )
}

export default SidebarOpeningHours
