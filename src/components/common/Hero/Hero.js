import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import clsx from "clsx";

import styles from "./Hero.module.scss";

const Component = ({
  className,
  children,
  title,
  link,
  buttonDesc,
  subtitle,
}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.description}>
      <div className={styles.description__title}>
        <h2>{title}</h2>
      </div>
      <Button
        size="large"
        variant="contained"
        className={styles.description__button}
      >
        <Link
          to={link}
          variant="subtitle1"
          color="secondary"
          className={styles.link}
        >
          {buttonDesc}
        </Link>
      </Button>

      <p className={styles.description_subtitle}>{subtitle}</p>
    </div>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  buttonDesc: PropTypes.string,
  subtitle: PropTypes.string,
};

export { Component as Hero, Component as HeroComponent };
