import React, { useState } from "react";
import PropTypes from "prop-types";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./Carousel.module.scss";

const Component = ({ className }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className={styles.carousel__image}>
          <img
            className="d-block w-100"
            src="images/offers/Huasteca4.jpg"
            alt="First slide"
          />
          <Carousel.Caption className={styles.carousel__description}>
            <h1>Tailor made trips in Mexico </h1>
            <h4>Nulla vitae elit libero, a pharetra augue mollis interdum.</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carousel__image}>
          <img
            className="d-block w-100"
            src="images/offers/Huasteca1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className={styles.carousel__description}>
            <h1> Fall in love with Mexico</h1>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carousel__image}>
          <img
            className="d-block w-100"
            src="images/offers/Huasteca2.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className={styles.carousel__description}>
            <h1>Trips that maches your profile</h1>
            <h4>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Carousel,
  // Container as Carousel,
  Component as CarouselComponent,
};
