import React, { useState } from "react";
import PropTypes from "prop-types";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./Carousel.module.scss";

const Component = ({ className, children }) => {
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
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carousel__image}>
          <img
            className="d-block w-100"
            src="images/offers/Huasteca1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className={styles.carousel__description}>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carousel__image}>
          <img
            className="d-block w-100"
            src="images/offers/Huasteca2.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className={styles.carousel__description}>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
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
