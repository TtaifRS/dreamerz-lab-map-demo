import { Box, Button, Grid, Stack, Typography } from '@mui/material'

function RequestedInfo() {
  return (
    <Box sx={{ backgroundColor: "#716D6C" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ padding: "10px" }}>
        <Grid>
          <Typography color="#fff">
            - Selected Field Information
          </Typography>
        </Grid>
        <Grid>
          <Button variant="outlined" color="secondary" sx={{ color: "#000", backgroundColor: "#D9D9D9", border: 'none' }}>Request Service</Button>
        </Grid>
      </Stack>
    </Box>
  )
}

export default RequestedInfo


