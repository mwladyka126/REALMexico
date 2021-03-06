import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AmountCounter } from "../../common/AmountCounter/AmountCounter";
import { DatePicker } from "../../common/DatePicker/DatePicker";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { editInCart, removeFromCart } from "../../../redux/offersRedux.js";

import clsx from "clsx";

import styles from "./CartItem.module.scss";

class Component extends React.Component {
  state = {
    cart: {
      _id: this.props._id,
      days: this.props.days,
      people: this.props.people,
      message: this.props.message,
      image: this.props.image,
      start: this.props.start,
      title: this.props.title,
      price: this.props.price,
      totalPrice: this.props.totalPrice,
    },
  };

  setPeople = (amount) => {
    const { cart } = this.state;
    const { editInCart } = this.props;

    const newPrice = cart.price * parseInt(amount) * cart.days;

    this.setState({
      cart: {
        ...cart,
        people: parseInt(amount),
        totalPrice: newPrice,
      },
    });
    editInCart({ ...cart, people: parseInt(amount), totalPrice: newPrice });
    const cartInLocalStorage = JSON.parse(localStorage.getItem("tripInCart"));
    if (cartInLocalStorage) {
      const itemToEdit = cartInLocalStorage.find((el) => el._id === cart._id);
      const index = cartInLocalStorage.indexOf(itemToEdit);
      itemToEdit.people = parseInt(amount);
      itemToEdit.totalPrice = newPrice;
      cartInLocalStorage.splice(index, 1, itemToEdit);
      localStorage.setItem("tripInCart", JSON.stringify(cartInLocalStorage));
    }
  };

  setDays = (amount) => {
    const { cart } = this.state;
    const { editInCart } = this.props;

    const newPrice = cart.price * parseInt(amount) * cart.people;

    this.setState({
      cart: {
        ...cart,
        days: parseInt(amount),
        totalPrice: newPrice,
      },
    });
    editInCart({ ...cart, days: parseInt(amount), totalPrice: newPrice });
    const cartInLocalStorage = JSON.parse(localStorage.getItem("tripInCart"));
    if (cartInLocalStorage) {
      const itemToEdit = cartInLocalStorage.find((el) => el._id === cart._id);
      const index = cartInLocalStorage.indexOf(itemToEdit);
      itemToEdit.days = parseInt(amount);
      cartInLocalStorage.splice(index, 1, itemToEdit);
      localStorage.setItem("tripInCart", JSON.stringify(cartInLocalStorage));
    }
  };

  handleChange = (event) => {
    const { cart } = this.state;
    const { editInCart } = this.props;

    this.setState({
      cart: { ...cart, [event.target.name]: event.target.value },
    });
    editInCart({ ...cart, [event.target.name]: event.target.value });

    const cartInLocalStorage = JSON.parse(localStorage.getItem("tripInCart"));
    if (cartInLocalStorage) {
      const itemToEdit = cartInLocalStorage.find((el) => el._id === cart._id);
      const index = cartInLocalStorage.indexOf(itemToEdit);
      itemToEdit.message = event.target.value;
      cartInLocalStorage.splice(index, 1, itemToEdit);
      localStorage.setItem("tripInCart", JSON.stringify(cartInLocalStorage));
    }
  };
  setDate = (date) => {
    const { cart } = this.state;
    const { editInCart } = this.props;

    this.setState({
      cart: {
        ...cart,
        start: date.toLocaleDateString("en-US"),
      },
    });
    editInCart({ ...cart, start: date.toLocaleDateString("en-US") });

    const cartInLocalStorage = JSON.parse(localStorage.getItem("tripInCart"));
    if (cartInLocalStorage) {
      const itemToEdit = cartInLocalStorage.find((el) => el._id === cart._id);
      const index = cartInLocalStorage.indexOf(itemToEdit);
      itemToEdit.start = date.toLocaleDateString("en-US");
      cartInLocalStorage.splice(index, 1, itemToEdit);
      localStorage.setItem("tripInCart", JSON.stringify(cartInLocalStorage));
    }
  };

  removeItem = () => {
    const { cart } = this.state;
    const { removeFromCart } = this.props;

    removeFromCart(cart);

    const cartInLocalStorage = JSON.parse(localStorage.getItem("tripInCart"));
    if (cartInLocalStorage) {
      const index = cartInLocalStorage.findIndex((el) => el._id === cart._id);
      cartInLocalStorage.splice(index, 1);
      localStorage.setItem("tripInCart", JSON.stringify(cartInLocalStorage));
    }
  };

  render() {
    const {
      _id,
      regionId,
      className,
      title,
      image,
      start,
      days,
      people,
      totalPrice,
      message,
    } = this.props;

    console.log(regionId);
    return (
      <div className={clsx(className, styles.root)}>
        <div className={styles.container}>
          <Paper elevation={3}>
            <Card>
              <Row className={styles.reservation}>
                <Col xs="12" sm="6" md="4" className={styles.reservation__item}>
                  <div className={styles.hero}>
                    <h5>Your trip: {title}</h5>
                    <Link to={`/offers/${regionId}/${_id}`}>
                      <CardMedia
                        className={styles.image}
                        component="img"
                        image={image}
                        title={title}
                      />
                    </Link>
                  </div>
                </Col>
                <Col xs="12" sm="6" md="3" className={styles.reservation__item}>
                  <div className={styles.date}>
                    <b>From:</b>{" "}
                    <DatePicker defaultDate={start} setDate={this.setDate} />
                  </div>
                </Col>
                <Col xs="12" sm="6" md="3" className={styles.reservation__item}>
                  <div className={styles.counter}>
                    <b>Days:</b>
                    <AmountCounter
                      maxNumber={30}
                      defaultValue={days}
                      setAmount={this.setDays}
                    />{" "}
                    <b>People:</b>
                    <AmountCounter
                      maxNumber={20}
                      defaultValue={people}
                      setAmount={this.setPeople}
                    />
                  </div>
                </Col>
                <Col xs="12" sm="6" md="2" className={styles.reservation__item}>
                  <div className={styles.price}>
                    <p>
                      <b>Price:</b>
                    </p>
                    <p>{totalPrice} EUR</p>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className={styles.icon}
                      onClick={this.removeItem}
                    />
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
                    rows={1}
                    defaultValue={message}
                    name="message"
                    onChange={this.handleChange}
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
  className: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  start: PropTypes.string,
  message: PropTypes.string,
  days: PropTypes.number,
  people: PropTypes.number,
  totalPrice: PropTypes.number,
};
const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = (dispatch) => ({
  editInCart: (value) => dispatch(editInCart(value)),
  removeFromCart: (value) => dispatch(removeFromCart(value)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as CartItem, Component as CartItemComponent };
