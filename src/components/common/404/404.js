import React from "react";
import { Button, Typography } from '@material-ui/core';
import { Helmet } from "react-helmet";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Link } from "react-router-dom";
import useStyles from "./404Style";


const NotFound = () => {
      const classes = useStyles();
      const WrongPathPageTitle = "Page not found!";

      return (
            <div>
                  <Helmet>
                        <title>{WrongPathPageTitle}</title>
                  </Helmet>
                        <div className={classes.divStyle}>
                              <Typography>
                                    <b>
                                          <span
                                                className={classes.span404}
                                          >
                                                404.
                                          </span>
                                    </b>
                                    <span
                                          className={classes.spanText}>
                                         Oops! An error has occurred!
                                    </span>
                              </Typography>
                              <Typography
                                    className={classes.errorText}
                              >
                                   The requested URL was not found on this server!
                                  <br/>
                                   You're lost in space now!
                              </Typography>
                              <Link
                               to="/"
                               className={classes.link}
                               >
                                    <Button variant="contained"
                                          className={classes.myButton}
                                    >
                                          <NavigateBeforeIcon />
                                     Back
                                   </Button>
                              </Link>
                        </div>
            </div>
      );
};

export default NotFound;
