import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Row, Col } from "reactstrap";
import { Hero } from "../../common/Hero/Hero";
import { Carousel } from "../../features/Carousel/Carousel";

import clsx from "clsx";

import { connect } from "react-redux";
import { getOneOffer } from "../../../redux/offersRedux.js";

import styles from "./OfferPage.module.scss";

import { BookingForm } from "../../features/BookingForm/BookingForm";

const Component = ({ className, offer }) => {
  const regionId = offer.region.replace(" ", "").toLowerCase();
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
            <Row>
              <Col>
                <div className={styles.photoWrapper}>
                  <img src={offer.image[0]} alt={offer.title} />
                </div>
              </Col>
              <Col>
                <div className={styles.photoWrapper}>
                  <img src={offer.image[1]} alt={offer.title} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={styles.photoWrapper}>
                  <img src={offer.image[2]} alt={offer.title} />
                </div>
              </Col>
            </Row>
            <Hero
              title={`Discover ${offer.region} region`}
              buttonDesc={`${offer.region} trips`}
              subtitle="Discover our selection of experiences in Mexico. Must-see tours,
          honeymoon itineraries, adventure trips, all are flexible and will
          adapt to your needs and expectations. Get inspired and trust our team
          of local experts to create your own tailor-made trip"
              link={`/offers/${regionId}`}
            />
          </div>
        </Col>
        <Col xs="12" sm="5">
          <BookingForm price={offer.price} />
        </Col>
      </Row>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

const mapStateToProps = (state, props) => ({
  offer: getOneOffer(state, props.match.params.offerId),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as OfferPage,
  Container as OfferPage,
  Component as OfferPageComponent,
};
