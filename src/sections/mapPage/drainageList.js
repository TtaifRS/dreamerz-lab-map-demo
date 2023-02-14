import { cloneElement, useState } from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,

  Typography
} from '@mui/material';

// project import
import MainCard from '@/components/mainCard';

const ListWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper
}));
ListWrapper.displayName = 'ListWrapper';

// ==============================|| LIST - INTERACTIVE ||============================== //

export default function DrainageList() {
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);



  return (
    <MainCard >
      <Box >
        <Grid container spacing={3} sx={{ backgroundColor: '#ced1ed' }}>
          <Grid item xs={12} lg={6}>
            <Typography variant="h5" component="div">
              Drainage Classification
            </Typography>
            <ListWrapper sx={{ backgroundColor: '#ced1ed' }}>
              <List dense={dense}>
                <ListItem>Soil</ListItem>
                <ListItem>Tile</ListItem>
                <ListItem>Yeild</ListItem>
                <ListItem>Wetlands</ListItem>
              </List>
            </ListWrapper>
            <Divider orientation="vertical" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <ListWrapper sx={{ backgroundColor: '#ced1ed' }}>
              <List dense={dense}>
                <ListItem>Weather</ListItem>
                <ListItem>Crop History</ListItem>
                <ListItem>Hail History</ListItem>
                <ListItem>NDVI</ListItem>
              </List>
            </ListWrapper>
          </Grid>
        </Grid>
      </Box>
    </MainCard>
  );
}
