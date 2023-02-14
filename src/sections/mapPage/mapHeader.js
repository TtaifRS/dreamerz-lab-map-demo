import DropDown from '@/components/dropDown'
import { Box, Stack, } from '@mui/material'


const fieldItems = ["Add", "Edit", "Imports"]
const waterManagementItems = ["Pump", "TDI", "Tile Maps", "Assessment"]
const analyzeItems = ["Yields", "Soils", "Plant Dates"]



function MapHeader() {
  return (
    <Box>
      <Stack direction="row" justifyContent="center" spacing={4} sx={{ backgroundColor: "#eeeeee" }}>
        <DropDown id="field" title="Field" items={fieldItems} />
        <DropDown id="water-management" title="Water Management" items={waterManagementItems} />
        <DropDown id="analyze" title="Analyze" items={analyzeItems} />

      </Stack>
    </Box>
  )
}

export default MapHeader