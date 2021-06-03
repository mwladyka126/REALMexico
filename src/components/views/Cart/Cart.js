import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AmountCounter } from "../../common/AmountCounter/AmountCounter";
import { DatePicker } from "../../common/DatePicker/DatePicker";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import clsx from "clsx";

import { connect } from "react-redux";
import { getFromCart } from "../../../redux/offersRedux.js";

import styles from "./Cart.module.scss";
import { CartItem } from "../CartItem/CartItem";

const Component = ({ className, cart }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.container}>
        {cart.length > 0 ? (
          <h2 className={styles.title}>Your booking</h2>
        ) : (
          <h2 className={styles.title}>Your cart is empty!</h2>
        )}
        {cart.map((item) => (
          <CartItem {...item} />
        ))}

        <Paper>
          <Card>
            <Row className={styles.summary}>
              <Col xs="6" sm="7" className={styles.summary__item}>
                <div className={styles.total}> TOTAL PRICE: </div>
              </Col>
              <Col xs="6" sm="5" className={styles.summary__item}>
                <div className={styles.buttons}>
                  <Button variant="contained" className={styles.button}>
                    Book it!
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
        </Paper>
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  cart: getFromCart(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
