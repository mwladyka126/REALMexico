import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Row, Col } from "reactstrap";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Hero } from "../../common/Hero/Hero";
import { Loading } from "../../common/Loading/Loading";
import { Error } from "../../common/Error/Error";

import clsx from "clsx";

import { connect } from "react-redux";
import {
  getAllRegions,
  fetchRegionsFromAPI,
  getLoadingState,
} from "../../../redux/regionsRedux.js";

import styles from "./RegionsOverview.module.scss";

class Component extends React.Component {
  componentDidMount() {
    const { fetchRegions } = this.props;
    fetchRegions();
  }
  render() {
    const {
      className,
      regions,
      loading: { active, error },
    } = this.props;
    if (active || !regions.length) {
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
            title="Discover Mexico with us"
            buttonDesc="All offers"
            subtitle="Discover our selection of experiences in Mexico. Must-see tours,
          honeymoon itineraries, adventure trips, all are flexible and will
          adapt to your needs and expectations. Get inspired and trust our team
          of local experts to create your own tailor-made trip"
            link="/offers"
          />

          <Row className={styles.offers}>
            {regions.map((region) => (
              <Col xs="12" sm="6" md="4" key={region.id}>
                <Card className={styles.offer}>
                  <Link
                    to={`/offers/${region.regionId}`}
                    className={styles.link}
                  >
                    <CardActionArea>
                      <CardMedia
                        className={styles.image}
                        component="img"
                        image={region.image}
                        title={region.name}
                      />
                      <CardContent className={styles.wrapper}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                          className={styles.name}
                        >
                          {region.name}
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
}
Component.propTypes = {
  regions: PropTypes.array,
  className: PropTypes.string,
  fetchRegions: PropTypes.func,
  loading: PropTypes.object,
};

const mapStateToProps = (state) => ({
  regions: getAllRegions(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchRegions: () => dispatch(fetchRegionsFromAPI()),
});
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as RegionsOverview,
  Container as RegionsOverview,
  Component as RegionsOverviewComponent,
};
