import React from "react";
import PropTypes from "prop-types";

//import clsx from "clsx";

import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styles from "./NotFound.module.scss";

const Component = ({ className }) => (
  <div className={styles.root}>
    <Paper elevation={9} className={styles.container}>
      <Grid
        container
        justify="center"
        direction="column"
        alignItems="center"
        xl
      >
        <Grid item>
          <Typography className={styles.title} variant="h3" component="h3">
            Page not found
          </Typography>
        </Grid>
        <Grid item>
          <Button
            className={styles.button}
            variant="contained"
            color="primary"
            component={Link}
            to={"/"}
          >
            Homepage
          </Button>
        </Grid>
      </Grid>
    </Paper>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export { Component as NotFound, Component as NotFoundComponent };
