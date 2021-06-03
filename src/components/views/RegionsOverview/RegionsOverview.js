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
import { getAllRegions } from "../../../redux/regionsRedux.js";

import styles from "./RegionsOverview.module.scss";

const Component = ({ className, regions }) => {
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
              <Link to={`/offers/${region.regionId}`} className={styles.link}>
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
};

Component.propTypes = {
  regions: PropTypes.array,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  regions: getAllRegions(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as RegionsOverview,
  Container as RegionsOverview,
  Component as RegionsOverviewComponent,
};
