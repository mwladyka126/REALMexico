import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import clsx from "clsx";
import styles from "./CardView.module.scss";

const Component = ({ className, link, image, name }) => (
  <div className={clsx(className, styles.root)}>
    <Card className={styles.offer}>
      <Link to={link} className={styles.link}>
        <CardActionArea>
          <CardMedia
            className={styles.image}
            component="img"
            image={image}
            title={name}
          />
          <CardContent className={styles.wrapper}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={styles.name}
            >
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
};

export { Component as CardView, Component as CardViewComponent };
