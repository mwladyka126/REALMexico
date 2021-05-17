import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col, Button, Card } from "reactstrap";

import clsx from "clsx";

import { connect } from "react-redux";
import { getAllRegions } from "../../../redux/regionsRedux.js";

import styles from "./RegionsOverview.module.scss";

const Component = ({ className, regions }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <h2>RegionsOverview</h2>
      <Container>
        <Row>
          {regions.map((region) => (
            <Col xs="12" sm="6" md="2" key={region.id}>
              <Card>
                <Card.Img variant="top" src={region.image} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  regions: getAllRegions(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ContainerComp = connect(mapStateToProps)(Component);

export {
  // Component as RegionsOverview,
  ContainerComp as RegionsOverview,
  Component as RegionsOverviewComponent,
};
