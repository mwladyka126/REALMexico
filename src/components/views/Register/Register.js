import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Button from "@material-ui/core/Button";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Yup from "yup";

import clsx from "clsx";

import { connect } from "react-redux";
import styles from "./Register.module.scss";
import { addBookingRequest } from "../../../redux/bookingsRedux";
import { cleanCart } from "../../../redux/offersRedux.js";

const Component = ({
  className,
  bookings,
  totalPrice,
  sendBooking,
  cleanCart,
}) => {
  const submitOrder = (values) => {
    values.created = new Date().toLocaleDateString("en-US");
    values.trips = bookings;
    sendBooking(values);
    cleanCart();
    if (localStorage.getItem("tripInCart")) {
      localStorage.removeItem("tripInCart");
    }
  };
  return (
    <div className={clsx(className, styles.root)}>
      <h3 className={styles.title}>Fill the contact form</h3>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          trips: "",
          created: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("This field is required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("This field is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Invalid email address"),
          phone: Yup.number()
            .positive()
            .integer()
            .required("Invalid phone number"),
        })}
        onSubmit={(values) => submitOrder(values)}
      >
        <Form className={styles.register}>
          <label htmlFor="firstName" className={styles.register__label}>
            First Name
          </label>
          <Field
            name="firstName"
            type="text"
            className={styles.register__field}
          />
          <div className={styles.register__error}>
            <ErrorMessage name="firstName" className={styles.register__error} />
          </div>

          <label htmlFor="lastName" className={styles.register__label}>
            Last Name
          </label>
          <Field
            name="lastName"
            type="text"
            className={styles.register__field}
          />
          <div className={styles.register__error}>
            <ErrorMessage name="lastName" />
          </div>

          <label htmlFor="email" className={styles.register__label}>
            Email Address
          </label>
          <Field name="email" type="email" className={styles.register__field} />
          <div className={styles.register__error}>
            <ErrorMessage name="email" />
          </div>

          <label htmlFor="phone" className={styles.register__label}>
            Phone
          </label>
          <Field
            name="phone"
            type="number"
            className={styles.register__field}
          />
          <div className={styles.register__error}>
            <ErrorMessage name="phone" />
          </div>

          <div className={styles.register__submit}>
            <div className={styles.price}>{totalPrice}</div>
            <Button type="submit" className={styles.button}>
              Submit{" "}
              <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  totalPrice: PropTypes.string,
  bookings: PropTypes.array,
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  sendBooking: (value) => dispatch(addBookingRequest(value)),
  cleanCart: () => dispatch(cleanCart()),
});
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Register,
  Container as Register,
  Component as RegisterComponent,
};
