import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { DatePicker } from "../../common/DatePicker/DatePicker";
import { AmountCounter } from "../../common/AmountCounter/AmountCounter";

import clsx from "clsx";

import styles from "./BookingForm.module.scss";

class Component extends React.Component {
  state = {
    cart: {
      _id: this.props.offer._id,
      title: this.props.offer.title,
      image: this.props.offer.image[0],
      price: this.props.offer.price,
      people: 0,
      days: 0,
      start: new Date().toLocaleDateString("en-US"),
      totalPrice: "",
      message: "",
    },
  };

  setPeople = (amount) => {
    const { cart } = this.state;

    this.setState({ cart: { ...cart, people: parseInt(amount) } });
  };

  setDays = (amount) => {
    const { cart } = this.state;

    this.setState({ cart: { ...cart, days: parseInt(amount) } });
  };

  handleChange = (event) => {
    const { cart } = this.state;

    this.setState({
      cart: { ...cart, [event.target.name]: event.target.value },
    });
  };
  setDate = (date) => {
    const { cart } = this.state;

    this.setState({
      cart: {
        ...cart,
        start: date.toLocaleDateString("en-US"),
      },
    });
  };

  placeInCart = (event) => {
    const { cart } = this.state;
    const { addToCart } = this.props;

    cart.totalPrice = cart.price * cart.people * cart.days;
    if (cart.people > 0 && cart.days > 0) {
      addToCart(cart);
    } else {
      alert("you have to choose the amount of days and people");
    }

    if (localStorage.getItem("tripInCart") !== null) {
      const cartInLocalStorage = JSON.parse(localStorage.getItem("tripInCart"));
      cartInLocalStorage.push(cart);
      localStorage.setItem("tripInCart", JSON.stringify(cartInLocalStorage));
    } else {
      localStorage.setItem("tripInCart", JSON.stringify([cart]));
    }
  };

  render() {
    const { className, offer } = this.props;
    const { cart } = this.state;
    return (
      <div className={clsx(className, styles.root)}>
        <Card className={styles.booking}>
          <CardContent>
            <div className={styles.booking__item}>
              <h2 className={styles.title}>Start your journey with us</h2>
              <p className={styles.subtitle}>
                At the moment you only need to know the start day, minimum amout
                of days and minium amount of persons. All the rest you can book
                later! We are flexible! You can always book later more days or
                bring your friends or family with you!
              </p>
            </div>
            <div className={styles.booking__item}>
              <h3 className={styles.title}>Fill the booking form</h3>
            </div>
            <div className={styles.booking__item}>
              <p>Start day: </p> <DatePicker setDate={this.setDate} />
            </div>
            <div className={styles.booking__item}>
              <Tooltip title="for more then 30 days, contact us">
                <p>
                  Amount of days:
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    className={styles.icon}
                  />
                </p>
              </Tooltip>
              <AmountCounter maxNumber={30} setAmount={this.setDays} />
            </div>
            <div className={styles.booking__item}>
              <Tooltip title="for more then 20 people, contact us">
                <p>
                  Amount of people:
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    className={styles.icon}
                  />
                </p>
              </Tooltip>
              <AmountCounter maxNumber={20} setAmount={this.setPeople} />
            </div>
            <div className={styles.booking__item}>
              <Tooltip title="per day per person">
                <p>
                  Price:
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    className={styles.icon}
                  />
                </p>
              </Tooltip>

              <p>{offer.price} EUR</p>
            </div>
            <div className={styles.booking__item}>
              <p>Total price: </p>
              <p>{cart.price * cart.days * cart.people} EUR</p>
            </div>
            <div className={styles.booking__item}>
              <p className={styles.subtitle}>
                Do you have any travel ideas? Tell us what you have in mind so
                we can help you complete a perfect itinerary!
              </p>
              <textarea
                rows="3"
                className={styles.textarea}
                name="message"
                onChange={this.handleChange}
              ></textarea>
            </div>

            <div className={styles.booking__item}>
              <Button
                variant="contained"
                className={styles.button}
                onClick={this.placeInCart}
                component={Link}
                to={"/cart"}
                disabled={cart.people > 0 && cart.days > 0 ? false : true}
              >
                Add to cart
                <FontAwesomeIcon icon={faCartPlus} className={styles.icon} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  offer: PropTypes.object,
};

export {
  Component as BookingForm,
  //Container as BookingForm,
  Component as BookingFormComponent,
};
