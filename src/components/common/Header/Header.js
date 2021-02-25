
import React  from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import myStyle from "./HeaderStyle";



const AppTopBar = () => {
    const classes = myStyle();
    return (
  <AppBar className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
      <Typography variant="h5" className={classes.t1}>
      &nbsp;
      &nbsp;
        React
      &nbsp;
      </Typography>
      <Typography variant="h5" className={classes.t2}>
        GraphQL 
      &nbsp;
      </Typography>
      <Typography variant="h5" className={classes.t3}>
        Countries
      &nbsp;
      </Typography>
    </Toolbar>
  </AppBar> 
); 
}

export default AppTopBar;
