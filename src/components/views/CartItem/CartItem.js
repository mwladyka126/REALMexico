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

import styles from "./CartItem.module.scss";

class Component extends React.Component {
  render() {
    const { className, title, image, start, days, people, price, message } =
      this.props;
    return (
      <div className={clsx(className, styles.root)}>
        <div className={styles.container}>
          <Paper elevation={3}>
            <Card>
              <Row className={styles.reservation}>
                <Col xs="12" sm="6" md="4" className={styles.reservation__item}>
                  <div className={styles.hero}>
                    <h5>Your trip to {title}</h5>
                    <CardMedia
                      className={styles.image}
                      component="img"
                      image={image}
                      title={title}
                    />
                  </div>
                </Col>
                <Col xs="12" sm="6" md="3" className={styles.reservation__item}>
                  <div className={styles.date}>
                    <b>From:</b> <DatePicker defaultDate={start} />
                  </div>
                </Col>
                <Col xs="12" sm="6" md="3" className={styles.reservation__item}>
                  <div className={styles.counter}>
                    <b>Days:</b>
                    <AmountCounter maxNumber={30} defaultValue={days} />{" "}
                    <b>People:</b>
                    <AmountCounter maxNumber={20} defaultValue={people} />
                  </div>
                </Col>
                <Col xs="12" sm="6" md="2" className={styles.reservation__item}>
                  <div className={styles.price}>
                    <p>
                      <b>Price:</b>
                    </p>
                    <p>{price}</p>
                    <FontAwesomeIcon icon={faTrash} className={styles.icon} />
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
                    defaultValue={message}
                    variant="outlined"
                  />
                </Col>
              </Row>
            </Card>
          </Paper>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as CartItem,
  //Container as CartItem,
  Component as CartItemComponent,
};
