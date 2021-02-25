
import React  from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const AppTopBar = () => {
  return (
  <AppBar position="static">
  <Toolbar>
    <Typography>
      DEUTSCHE
    </Typography>
    &nbsp;
    <Typography>
      POSTCODE
    </Typography>
    &nbsp;
    <Typography>
      LOTTERIE
    </Typography>
  </Toolbar>
</AppBar> ); }

export default AppTopBar;
