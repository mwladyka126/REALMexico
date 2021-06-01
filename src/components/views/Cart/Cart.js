import React, { useState } from "react";
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

const Component = ({ className, offerInCart }) => {
  console.log(offerInCart);
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.container}>
        <h2 className={styles.title}>Your booking</h2>
        <Paper elevation={3}>
          <Card>
            <Row className={styles.reservation}>
              <Col xs="12" sm="6" md="4" className={styles.reservation__item}>
                <div className={styles.hero}>
                  <h5>Your trip to {offerInCart.title}</h5>
                  <CardMedia
                    className={styles.image}
                    component="img"
                    image="images/offers/IslaMujeres.jpg"
                    title=""
                  />
                </div>
              </Col>
              <Col xs="12" sm="6" md="3" className={styles.reservation__item}>
                <div className={styles.date}>
                  <b>From:</b> <DatePicker defaultDate={offerInCart.start} />
                </div>
              </Col>
              <Col xs="12" sm="6" md="3" className={styles.reservation__item}>
                <div className={styles.counter}>
                  <b>Days:</b>
                  <AmountCounter
                    maxNumber={30}
                    defaultValue={offerInCart.days}
                  />{" "}
                  <b>People:</b>
                  <AmountCounter
                    maxNumber={20}
                    defaultValue={offerInCart.people}
                  />
                </div>
              </Col>
              <Col xs="12" sm="6" md="2" className={styles.reservation__item}>
                <div className={styles.price}>
                  <p>
                    <b>Price:</b>
                  </p>
                  <p>{offerInCart.price}</p>
                </div>
              </Col>
            </Row>
            <Row className={styles.message}>
              <Col xs="12" className={styles.message__item}>
                <TextField
                  className={styles.textfield}
                  id="outlined-multiline-static"
                  label="Write us your ideas"
                  multiline
                  rows={2}
                  defaultValue={offerInCart.message}
                  variant="outlined"
                />
              </Col>
            </Row>
          </Card>
        </Paper>
        <Paper>
          <Card>
            <Row className={styles.summary}>
              <Col xs="6" sm="7" className={styles.summary__item}>
                <div className={styles.total}>
                  {" "}
                  TOTAL PRICE: {offerInCart.totalPrice}{" "}
                </div>
              </Col>
              <Col xs="6" sm="5" className={styles.summary__item}>
                <div className={styles.buttons}>
                  <Button variant="contained" className={styles.button}>
                    Book it!
                  </Button>
                  <FontAwesomeIcon icon={faTrash} className={styles.icon} />
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
  offerInCart: getFromCart(state),
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
