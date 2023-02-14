import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button, Stack } from '@mui/material';
import FieldCard from '@/components/card';
import DrainageList from './drainageList'

const Item = styled(Paper)(({ theme }) => ({

  padding: theme.spacing(1),
  textAlign: 'center',
  color: "#000",
  fontWeight: 'bold'
}));

export default function FieldInformation() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <Item sx={{ backgroundColor: "#C3C4C8" }}>My Field</Item>
        </Grid>
        <Grid item xs={3}  >
          <Item sx={{ backgroundColor: "#BBC6C8" }}>Field Data</Item>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="row" justifyContent="space-between">
            <Button variant='contained' color="secondary" sx={{ backgroundColor: '#676D83' }}>Field Monitor</Button>
            <Button variant='contained' color="secondary" sx={{ backgroundColor: '#676D83' }}>Field Insight</Button>
            <Button variant='contained' color="secondary" sx={{ backgroundColor: '#676D83' }}>Field Notes</Button>
            <Button variant='contained' color="secondary" sx={{ backgroundColor: '#676D83' }}>Share Status</Button>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <FieldCard title='Field List Dropdown List' bgColor="#D9D9D9" color="#000" />
        </Grid>
        <Grid item xs={3}>
          <DrainageList />
        </Grid>
        <Grid item xs={6}>
          <FieldCard title='Data, Graph & Table' bgColor="#676D83" color="#fff" />
        </Grid>
      </Grid>
    </Box>
  );
}