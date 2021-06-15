import React, { useState } from "react";
import PropTypes from "prop-types";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import clsx from "clsx";

import styles from "./Carousel.module.scss";

const Component = ({ className, slides }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
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

export {
  Component as Carousel,
  // Container as Carousel,
  Component as CarouselComponent,
};
