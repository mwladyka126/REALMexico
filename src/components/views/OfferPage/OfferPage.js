import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "reactstrap";
import { Hero } from "../../common/Hero/Hero";
import Paper from "@material-ui/core/Paper";

import clsx from "clsx";

import { connect } from "react-redux";
import { getOneOffer, addToCart } from "../../../redux/offersRedux.js";

import styles from "./OfferPage.module.scss";

import { BookingForm } from "../../features/BookingForm/BookingForm";

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
  };

  setDays = (amount) => {
    const { cart } = this.state;

    this.setState({ cart: { ...cart, days: amount } });
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
        <Row>
          <Col xs="12" sm="7">
            <div>
              <div className={styles.element}>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
              </div>

              <div className={styles.element}>
                <h3>Highlights</h3>
                <p>{offer.description}</p>
              </div>
              <Paper>
                <Row>
                  <Col xs="12" sm="6">
                    <div className={styles.photoWrapper}>
                      <img src={offer.image[0]} alt={offer.title} />
                    </div>
                  </Col>
                  <Col xs="12" sm="6">
                    <div className={styles.photoWrapper}>
                      <img src={offer.image[1]} alt={offer.title} />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <div className={styles.photoWrapper}>
                      <img src={offer.image[2]} alt={offer.title} />
                    </div>
                  </Col>
                </Row>
              </Paper>

              <Hero
                title={`Discover ${offer.region} region`}
                buttonDesc={`${offer.region} trips`}
                subtitle="Discover our selection of experiences in Mexico. Must-see tours,
          honeymoon itineraries, adventure trips, all are flexible and will
          adapt to your needs and expectations. Get inspired and trust our team
          of local experts to create your own tailor-made trip"
                link={`/offers/${offer.regionId}`}
              />
            </div>
          </Col>
          <Col xs="12" sm="5">
            <BookingForm offer={offer} addToCart={addToCart} />
          </Col>
        </Row>
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
};

const mapStateToProps = (state, props) => ({
  offer: getOneOffer(state, props.match.params.offerId),
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (value) => dispatch(addToCart(value)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as OfferPage,
  Container as OfferPage,
  Component as OfferPageComponent,
};
