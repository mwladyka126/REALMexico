import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "../../features/Carousel/Carousel";
import { RegionsOverview } from "../RegionsOverview/RegionsOverview";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./Homepage.module.scss";

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <Carousel />
    <div>
      <RegionsOverview className={styles.regions} />
    </div>
  </div>
);

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
