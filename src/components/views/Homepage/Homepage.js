import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "../../features/Carousel/Carousel";
import { RegionsOverview } from "../RegionsOverview/RegionsOverview";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./Homepage.module.scss";

const Component = ({ className }) => {
  const slidesGalery = [
    {
      id: "1",
      image: "images/offers/IslaMujeres.jpg",
      title: "Tailor made trips in Mexico",
      subtitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      id: "2",
      image: "/images/offers/Huasteca4.jpg",
      title: "Fall in love with Mexico",
      subtitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      id: "3",
      image: "images/offers/Huasteca2.jpg",
      title: "Trips that maches your profile",
      subtitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ];
  return (
    <div className={clsx(className, styles.root)}>
      <Carousel slides={slidesGalery} />
      <div>
        <RegionsOverview className={styles.regions} />
      </div>
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
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
