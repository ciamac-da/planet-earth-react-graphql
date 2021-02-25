import React from "react";
import { Button, Typography } from '@material-ui/core';
import { Helmet } from "react-helmet";
import Page from "react-page-loading";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Link } from "react-router-dom";
import Flip from 'react-reveal/Flip';
import useStyles from "./404Style";


const NotFound = () => {
      const classes = useStyles();
      const WrongPathPageTitle = "Page not found!";

      return (
            <Page loader={"bar"} color={"white"} size={9} duration={1}>
                  <Helmet>
                        <title>{WrongPathPageTitle}</title>
                  </Helmet>
                        <div
                              className={classes.divStyle}
                        >
                  <Flip left>
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
                    </Flip>
                        </div>
            </Page>
      );
};

export default NotFound;
