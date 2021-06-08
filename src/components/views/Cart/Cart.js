import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import clsx from "clsx";

import { connect } from "react-redux";
import { getFromCart } from "../../../redux/offersRedux.js";

import styles from "./Cart.module.scss";
import { CartItem } from "../CartItem/CartItem";
import { Register } from "../Register/Register";

const Component = ({ className, cart, children }) => {
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
        {cart.length > 0 ? (
          <h2 className={styles.title}>Proccess your booking</h2>
        ) : (
          <h2 className={styles.title}>Your cart is empty!</h2>
        )}
        {cart.map((item) => (
          <CartItem {...item} />
        ))}
        {cart.length > 0 ? (
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
  children: PropTypes.node,
  className: PropTypes.string,
  cart: PropTypes.array,
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
