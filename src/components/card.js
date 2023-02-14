import PropTypes from 'prop-types';

// material-ui
import { styled } from '@mui/material/styles';
import { Card, CardContent, Grid, Typography } from '@mui/material';




function FieldCard({ title, bgColor, color }) {


  return (
    <Card elevation={0} sx={{ background: bgColor, position: 'relative', color: color, padding: "40px" }}>
      <CardContent>
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={1}>
          <Grid item sm={12}>
            <Typography variant="body1" align="center" color="inherit">
              {title}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

FieldCard.propTypes = {
  primary: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string
};

export default FieldCard;
