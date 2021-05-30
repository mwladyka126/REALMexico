import React, { useState } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AmountCounter } from "../../common/AmountCounter/AmountCounter";
import { DatePicker } from "../../common/DatePicker/DatePicker";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./Cart.module.scss";

const Component = ({ className }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.container}>
        <h2>Your booking</h2>
        <Paper elevation={3}>
          <Card>
            <Row className={styles.reservation}>
              <Col xs="12" sm="3" className={styles.reservation__item}>
                <h5>Your trip to Huasteca Potosina</h5>
                <CardMedia
                  className={styles.image}
                  component="img"
                  image="images/offers/IslaMujeres.jpg"
                  title=""
                />
              </Col>
              <Col xs="12" sm="2">
                From: <DatePicker />
              </Col>
              <Col xs="12" sm="4">
                Days: <AmountCounter /> People: <AmountCounter />{" "}
              </Col>
              <Col xs="12" sm="1">
                <p>Price:</p>
                <p>xxx $</p>
              </Col>
            </Row>
          </Card>
        </Paper>
        <Paper>
          <Card>
            <Row>
              <Col xs="12">
                <TextField
                  className={styles.textfield}
                  id="outlined-multiline-static"
                  label="Write us your ideas"
                  multiline
                  rows={2}
                  defaultValue=""
                  variant="outlined"
                />
              </Col>
            </Row>
          </Card>
        </Paper>
        <Paper>
          <Card>
            <Row>
              <Col xs="6">TOTAL PRICE: 800$</Col>
              <Col xs="4">
                {" "}
                <Button variant="contained" className={styles.button}>
                  Book it!
                </Button>
              </Col>
              <Col xs="2">
                <FontAwesomeIcon icon={faTrash} className={styles.icon} />
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

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Cart,
  // Container as Cart,
  Component as CartComponent,
};
