import React from "react";
import PropTypes from "prop-types";

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
      id: this.props.offer.id,
      title: this.props.offer.title,
      image: this.props.offer.image,
      price: this.props.offer.price,
      people: 0,
      days: 0,
      start: "",
      total: "",
      message: "",
    },
  };

  setPeople = (amount) => {
    const { cart } = this.state;

    this.setState({ cart: { ...cart, people: amount } });
    console.log(cart);
  };

  setDays = (amount) => {
    const { cart } = this.state;

    this.setState({ cart: { ...cart, days: parseInt(amount) } });

    console.log(cart);
  };

  setTotalPrice = () => {
    const { cart } = this.state;
    const total = cart.price * cart.people + cart.price * cart.days;
    this.setState({ cart: { ...cart, total } });
  };

  placeInCart = (event) => {
    const { cart } = this.state;
    const { addToCart } = this.props;

    addToCart(cart);
  };
  render() {
    const { className, offer, addToCart } = this.props;
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
              <p>Start day: </p> <DatePicker />
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
              <p>Price: </p>
              <p>{offer.price}</p>
            </div>
            <div className={styles.booking__item}>
              <p>Total price: </p>
              <p>600</p>
            </div>
            <div className={styles.booking__item}>
              <p className={styles.subtitle}>
                Do you have any travel ideas? Tell us what you have in mind so
                we can help you complete a perfect itinerary!
              </p>
              <textarea rows="6" className={styles.textarea}></textarea>
            </div>
            <div className={styles.booking__item}>
              <Button variant="contained" className={styles.button}>
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
};

export {
  Component as BookingForm,
  //Container as BookingForm,
  Component as BookingFormComponent,
};
