import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Button from "@material-ui/core/Button";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Snackbar from "@material-ui/core/Snackbar";
import * as Yup from "yup";

import clsx from "clsx";

import { connect } from "react-redux";
import styles from "./Register.module.scss";
import { addBookingRequest } from "../../../redux/bookingsRedux";
import { getLoadingBookings } from "../../../redux/bookingsRedux.js";

const Component = ({
  className,
  bookings,
  totalPrice,
  sendBooking,
  loadingBookings,
}) => {
  const submitOrder = (values) => {
    values.created = new Date();
    values.trips = bookings;
    sendBooking(values);

    if (localStorage.getItem("tripInCart")) {
      localStorage.removeItem("tripInCart");
    }
  };
  const [open, setOpen] = React.useState(true);
  const closeSnack = () => {
    setOpen(false);
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
            .min(2, "Your name is too short")
            .max(15, "Your name is too long")
            .required("This field is required"),
          lastName: Yup.string()
            .min(2, "Your name is too short")
            .max(20, "Your name is too long")
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
      {loadingBookings && loadingBookings.error && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={closeSnack}
          message="There are still errors in the contact form"
          className={styles.snackbar}
        />
      )}
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  totalPrice: PropTypes.string,
  bookings: PropTypes.array,
  sendBooking: PropTypes.func,
  loadingBookings: PropTypes.object,
};
const mapStateToProps = (state) => ({
  loadingBookings: getLoadingBookings(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendBooking: (value) => dispatch(addBookingRequest(value)),
});
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as Register, Component as RegisterComponent };
