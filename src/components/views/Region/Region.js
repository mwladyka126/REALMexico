import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { Row, Col } from "reactstrap";
import { Hero } from "../../common/Hero/Hero";
import { Loading } from "../../common/Loading/Loading";
import { Error } from "../../common/Error/Error";
import { CardView } from "../../features/CardView/CardView";

import clsx from "clsx";

import { connect } from "react-redux";
import {
  getOffersByRegion,
  fetchOffersFromAPI,
  getLoadingState,
} from "../../../redux/offersRedux.js";

import styles from "./Region.module.scss";

class Component extends React.Component {
  componentDidMount() {
    const { fetchOffers } = this.props;
    fetchOffers();
  }
  render() {
    const {
      className,
      offers,
      loading: { active, error },
    } = this.props;

    const region = offers.map((el) => el.region)[0];
    if (active || !offers.length) {
      return (
        <Paper className={styles.component}>
          <Loading />
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <Error>{error}</Error>
        </Paper>
      );
    } else {
      if (offers.length === 0) {
        return (
          <Hero
            title="No offers from this region at the moment"
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

          <Row>
            {offers.map((offer) => (
              <Col xs="12" sm="6" md="6" lg="4" key={offer._id}>
                <CardView
                  link={`/offers/${offer.regionId}/${offer._id}`}
                  image={offer.image[0]}
                  name={offer.title}
                />
              </Col>
            ))}
          </Row>
        </div>
      );
    }
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  offers: PropTypes.array,
  match: PropTypes.object,
  loading: PropTypes.object,
  fechOffers: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  offers: getOffersByRegion(state, props.match.params.regionId),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOffers: () => dispatch(fetchOffersFromAPI()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as Region, Component as RegionComponent };
