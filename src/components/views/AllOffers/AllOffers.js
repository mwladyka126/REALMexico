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
import {
  getAllOffers,
  fetchOffersFromAPI,
} from "../../../redux/offersRedux.js";
import styles from "./AllOffers.module.scss";

class Component extends React.Component {
  componentDidMount() {
    const { fetchOffers } = this.props;
    fetchOffers();
  }
  render() {
    const { className, allOffers } = this.props;
    return (
      <div className={clsx(className, styles.root)}>
        <Hero
          title="Full list of our offers"
          buttonDesc="Back to homepage"
          subtitle="Discover our selection of experiences in Mexico. Must-see tours,
          honeymoon itineraries, adventure trips, all are flexible and will
          adapt to your needs and expectations. Get inspired and trust our team
          of local experts to create your own tailor-made trip"
          link="/"
        />
        <Row>
          {allOffers.map((offer) => (
            <Col xs="12" sm="6" md="4" key={offer._id}>
              <Card className={styles.offer}>
                <Link
                  to={`/offers/${offer.regionId}/${offer._id}`}
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
  }
}
Component.propTypes = {
  allOffers: PropTypes.array,
  className: PropTypes.string,
  fetchOffers: PropTypes.func,
};

const mapStateToProps = (state) => ({
  allOffers: getAllOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOffers: () => dispatch(fetchOffersFromAPI()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as AllOffers,
  Container as AllOffers,
  Component as AllOffersComponent,
};
