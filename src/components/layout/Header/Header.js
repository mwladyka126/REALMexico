import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Badge from "@material-ui/core/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./Header.module.scss";

const Component = ({ className, children }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.container}>
        <div className={styles.container__logo}>
          <Link to={"/"}>
            <img src="/images/logo.png" alt="Logo" title="REALMexico" />
          </Link>
        </div>
        <div className={styles.container__navbar}>
          <Navbar light expand="md">
            <Nav className="ml-auto" navbar>
              <Link to={"/offers/1"} className={styles.navItem}>
                Riviera Maya
              </Link>
              <Link to={"/offers/2"} className={styles.navItem}>
                Oaxaca
              </Link>
              <Link to={"/offers/3"} className={styles.navItem}>
                Chiapas
              </Link>
              <Link to={"/offers/4"} className={styles.navItem}>
                Jalisco
              </Link>
              <Link to={"/offers/5"} className={styles.navItem}>
                Ciudad de Mexico
              </Link>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className={styles.dropdown}>
                  Our agency
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Team</DropdownItem>
                  <DropdownItem>10 steps to book a trip with us</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Contact</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Navbar>
        </div>
        <div className={styles.container__cart}>
          <Link to={"/cart"} className={styles.link}>
            <Badge color="secondary" badgeContent={"0"}>
              <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

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
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
