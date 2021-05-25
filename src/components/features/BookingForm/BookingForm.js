import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { DatePicker } from "../../common/DatePicker/DatePicker";
import { AmountCounter } from "../../common/AmountCounter/AmountCounter";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./BookingForm.module.scss";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Card className={styles.booking}>
      <CardContent>
        <div className={styles.booking__item}>
          <h2 className={styles.title}>Start your journey with us</h2>
          <p className={styles.subtitle}>
            At the moment you only need to know the start day, minimum amout of
            days and minium amount of persons. All the rest you can book later!
            We are flexible! You can always book later more days or bring your
            friends or family with you!
          </p>
        </div>
        <div className={styles.booking__item}>
          <h3 className={styles.title}>Fill the booking form</h3>
        </div>
        <div className={styles.booking__item}>
          <p>Start day: </p> <DatePicker />
        </div>
        <div className={styles.booking__item}>
          <p>Amount of days: </p> <AmountCounter maxNumber={30} />
        </div>
        <div className={styles.booking__item}>
          <p>Amount of people: </p>
          <AmountCounter maxNumber={20} />
        </div>
        <div className={styles.booking__item}>
          <p>Price: </p>
          <p>600</p>
        </div>
        <div className={styles.booking__item}>
          <p>Total price: </p>
          <p>600</p>
        </div>
        <div className={styles.booking__item}>
          <p className={styles.subtitle}>
            Do you have any travel ideas? Tell us what you have in mind so we
            can help you complete a perfect itinerary!
          </p>
          <textarea rows="6" className={styles.textarea}></textarea>
        </div>
        <div className={styles.booking__item}>
          <Button variant="contained" className={styles.button}>
            Book now
            <FontAwesomeIcon icon={faCartPlus} className={styles.icon} />
          </Button>
        </div>
      </CardContent>
    </Card>
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
  Component as BookingForm,
  // Container as BookingForm,
  Component as BookingFormComponent,
};