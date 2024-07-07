import React from "react";
import Typography from '@material-ui/core/Typography';
import myStyle from "./FooterStyle";

const Footer = () => {
      const classes = myStyle();
      return (
            <div> 
                  <footer       className={classes.footer} >
                  <Typography   className={classes.typo}   >
                  Copyright {" "} &copy;  {new Date().getFullYear()}
                  &nbsp; Cia from Earth! All rights reserved.
                  </Typography>
                  </footer>
            </div>
      );
};
export default Footer;