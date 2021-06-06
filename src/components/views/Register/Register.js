import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Button from "@material-ui/core/Button";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Yup from "yup";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./Register.module.scss";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h3 className={styles.title}>Fill the contact form</h3>
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        phone: Yup.number().positive().integer().required(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
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
        <ErrorMessage name="firstName" className={styles.register__error} />

        <label htmlFor="lastName" className={styles.register__label}>
          Last Name
        </label>
        <Field name="lastName" type="text" className={styles.register__field} />
        <ErrorMessage name="lastName" className={styles.register__error} />

        <label htmlFor="email" className={styles.register__label}>
          Email Address
        </label>
        <Field name="email" type="email" className={styles.register__field} />
        <ErrorMessage name="email" className={styles.register__error} />

        <label htmlFor="phone" className={styles.register__label}>
          Phone
        </label>
        <Field name="phone" type="number" className={styles.register__field} />
        <ErrorMessage name="firstName" className={styles.register__error} />

        <div className={styles.register__submit}>
          <div className={styles.price}>{children}</div>
          <Button type="submit" className={styles.button}>
            Submit{" "}
            <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
          </Button>
        </div>
      </Form>
    </Formik>
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
  Component as Register,
  // Container as Register,
  Component as RegisterComponent,
};
