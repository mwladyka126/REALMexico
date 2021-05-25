import React, { useState } from "react";
import PropTypes from "prop-types";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./Carousel.module.scss";

const Component = ({ className, slides }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Carousel
        className={styles.carousel__image}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {slides.map((item) => (
          <Carousel.Item key={item.id} className={styles.carousel__image}>
            <img className="d-block w-100" src={item.image} alt="First slide" />
            <Carousel.Caption className={styles.carousel__description}>
              <h1>{item.title} </h1>
              <h4>{item.subtitle}</h4>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  slides: PropTypes.array,
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
