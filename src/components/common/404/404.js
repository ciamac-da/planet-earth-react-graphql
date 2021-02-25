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
      const WrongPathPageTitle = "Mars Tischtennis 2020 e.V./Page not found!";

      return (
            <Page loader={"bar"} color={"white"} size={9} duration={1}>
                  <Helmet>
                        <title>{WrongPathPageTitle}</title>
                  </Helmet>
                  <Flip left>
                        <div
                              className={classes.divStyle}
                        >
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
                                          Hoppla! Ein Fehler ist aufgetreten!
                                    </span>
                              </Typography>
                              <Typography
                                    className={classes.errorText}
                              >
                                    Die angeforderte URL wurde auf diesem Server nicht gefunden!
                              </Typography>
                              <Link
                               to="/"
                               className={classes.link}
                               >
                                    <Button variant="contained"
                                          className={classes.myButton}
                                    >
                                          <NavigateBeforeIcon />
                                     Zurück
                                   </Button>
                              </Link>
                        </div>
                  </Flip>
            </Page>
      );
};

export default NotFound;
