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
  getAllOffers,
  fetchOffersFromAPI,
  getLoadingState,
} from "../../../redux/offersRedux.js";
import styles from "./AllOffers.module.scss";

class Component extends React.Component {
  componentDidMount() {
    const { fetchOffers } = this.props;
    fetchOffers();
  }
  render() {
    const {
      className,
      allOffers,
      loading: { active, error },
    } = this.props;
    if (active || !allOffers.length) {
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
  allOffers: PropTypes.array,
  className: PropTypes.string,
  fetchOffers: PropTypes.func,
  loading: PropTypes.object,
};

const mapStateToProps = (state) => ({
  allOffers: getAllOffers(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOffers: () => dispatch(fetchOffersFromAPI()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as AllOffers, Component as AllOffersComponent };
