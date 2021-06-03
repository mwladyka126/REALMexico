import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Row, Col } from "reactstrap";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Hero } from "../../common/Hero/Hero";

import clsx from "clsx";

import { connect } from "react-redux";
import { getOffersByRegion } from "../../../redux/offersRedux.js";

import styles from "./Region.module.scss";
const Component = ({ className, offers, match }) => {
  const regionId = match.params.regionId;
  const region = offers.map((el) => el.region)[0];

  if (offers.length === 0) {
    return (
      <Hero
        title="No offers from this region at the momement"
        buttonDesc="All offers"
        subtitle="Discover our selection of experiences in Mexico. Must-see tours,
      honeymoon itineraries, adventure trips, all are flexible and will
      adapt to your needs and expectations. Get inspired and trust our team
      of local experts to create your own tailor-made trip"
        link="/offers"
      />
    );
  }

  return (
    <div className={clsx(className, styles.root)}>
      <Hero
        title={`Our trips around ${region}`}
        buttonDesc="All offers"
        subtitle="Discover our selection of experiences in Mexico. Must-see tours,
          honeymoon itineraries, adventure trips, all are flexible and will
          adapt to your needs and expectations. Get inspired and trust our team
          of local experts to create your own tailor-made trip"
        link="/offers"
      />

      <Row className={styles.offers}>
        {offers.map((offer) => (
          <Col xs="12" sm="6" md="6" key={offer.id}>
            <Card className={styles.offer}>
              <Link
                to={`/offers/${regionId}/${offer.id}`}
                className={styles.link}
              >
                <CardActionArea>
                  <CardMedia
                    className={styles.image}
                    component="img"
                    image={offer.image[0]}
                    title={offer.title}
                  />
                  <CardContent className={styles.wrapper}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={styles.name}
                    >
                      {offer.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  offers: PropTypes.array,
  match: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  offers: getOffersByRegion(state, props.match.params.regionId),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Region,
  Container as Region,
  Component as RegionComponent,
};
