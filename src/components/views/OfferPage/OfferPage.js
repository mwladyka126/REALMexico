import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Row, Col } from "reactstrap";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Hero } from "../../common/Hero/Hero";
import { Carousel } from "../../features/Carousel/Carousel";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./OfferPage.module.scss";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h2>OfferPage</h2>
    <Row>
      <Carousel className={styles.carousel} />
      <Col xs="12" sm="7">
        <Hero
          title="Discover Mexico with us"
          buttonDesc="All offers"
          subtitle="Discover our selection of experiences in Mexico. Must-see tours,
          honeymoon itineraries, adventure trips, all are flexible and will
          adapt to your needs and expectations. Get inspired and trust our team
          of local experts to create your own tailor-made trip"
          link="/offers"
        />
        <Carousel />
        <div>
          <h3>DAY OF THE DEAD IN OAXACA 2020</h3>
          <p>
            {" "}
            Make 2020 the year you experience the incredible Day of the Dead
            celebrations in Oaxaca. This one-of-a-kind festival is a vibrant
            fiesta of elaborate costumes, grand feasts, and vivid colors. But
            it’s also a time for quiet reflection and poignant moments to
            remember lost loved ones. Travel with Journey Mexico and we’ll craft
            a fully personalized itinerary to let you experience Day of the Dead
            on your owns terms without the hassle of traveling with a group.
            Take a read through our suggested itinerary – remember, everything
            can be altered to your preferences – to get a feel of what your Day
            of the Dead in Oaxaca could be.
          </p>
          <Row>
            <Col>
              <div className={styles.photoWrapper}>
                <img src="/images/offers/Huasteca2.jpg" alt="" />
              </div>
            </Col>
            <Col>
              <div className={styles.photoWrapper}>
                <img src="/images/offers/Huasteca2.jpg" alt="" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={styles.photoWrapper}>
                <img src="/images/offers/Huasteca2.jpg" alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <Col xs="12" sm="5">
        <Card>
          <h2>Start you journey with us</h2>
          <p>
            {" "}
            At the moment you only need to know the start day, minimum amout of
            days and minium amount of persons. All the rest you can book later!
            We are flexible! You can always book later more days or bring your
            friends or family with you!
          </p>
          <h3>Fill the booking form</h3>
          <Button variant="contained" color="primary">
            Book now
            <FontAwesomeIcon icon={faCartPlus} className={styles.icon} />
          </Button>
        </Card>
      </Col>
    </Row>
    {children}
  </div>
);

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
  Component as OfferPage,
  // Container as OfferPage,
  Component as OfferPageComponent,
};
