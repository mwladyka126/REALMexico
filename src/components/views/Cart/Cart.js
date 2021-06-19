import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import clsx from "clsx";

import { connect } from "react-redux";
import { getLoadingState, getFromCart } from "../../../redux/offersRedux.js";

import styles from "./Cart.module.scss";
import { CartItem } from "../CartItem/CartItem";
import { Register } from "../Register/Register";

const Component = ({ className, loading, cart }) => {
  const totalPrice = (cart) => {
    if (cart.length > 0) {
      const mapByPrice = cart.map((item) => parseInt(item.totalPrice));
      return mapByPrice.reduce((prev, next) => prev + next);
    }
  };
  const [open, setOpen] = React.useState(false);
  const showRegister = () => {
    setOpen(true);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.container}>
        {loading.confirmation ? (
          <Paper elevation={5}>
            <div className={styles.confirmation}>
              <h2 className={styles.title}>Thank you for your booking !</h2>
              <p className={styles.subtitle}>
                Check your email for confirmation
              </p>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            </div>
          </Paper>
        ) : (
          <div className={styles.mainInfo}>
            {" "}
            {cart && cart.length > 0 ? (
              <div className={styles.process}>
                <h2 className={styles.title}>Proccess your booking!</h2>
              </div>
            ) : (
              <Paper elevation={5}>
                <div className={styles.confirmation}>
                  <h2 className={styles.title}>Your cart is empty!</h2>
                  <Button
                    size="large"
                    variant="contained"
                    className={styles.button}
                  >
                    <Link
                      to={"/offers"}
                      variant="subtitle1"
                      color="secondary"
                      className={styles.link}
                    >
                      SEE ALL OFFERS
                    </Link>
                  </Button>
                </div>
              </Paper>
            )}
          </div>
        )}

        {cart && cart.map((item) => <CartItem {...item} />)}
        {cart && cart.length > 0 ? (
          <Paper elevation={3}>
            <Card>
              {!open ? (
                <Row className={styles.summary}>
                  <Col xs="6" sm="7" className={styles.summary__item}>
                    <div className={styles.total}>
                      {" "}
                      TOTAL PRICE: {totalPrice(cart)} EUR
                    </div>
                  </Col>
                  <Col xs="6" sm="5" className={styles.summary__item}>
                    <div className={styles.buttons}>
                      <Button
                        variant="contained"
                        className={styles.button}
                        onClick={showRegister}
                      >
                        Book it!
                      </Button>
                    </div>
                  </Col>
                </Row>
              ) : null}

              {open ? (
                <Row className={styles.register}>
                  <Col xs="12" className={styles.register__item}>
                    <Register
                      totalPrice={`TOTAL PRICE: ${totalPrice(cart)} EUR`}
                      bookings={cart}
                    />
                  </Col>
                </Row>
              ) : null}
            </Card>
          </Paper>
        ) : null}
      </div>
    </div>
  );
};

Component.propTypes = {
  loading: PropTypes.object,
  className: PropTypes.string,
  cart: PropTypes.array,
};

const mapStateToProps = (state) => ({
  loading: getLoadingState(state),
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
