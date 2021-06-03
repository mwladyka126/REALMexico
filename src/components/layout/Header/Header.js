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

import { connect } from "react-redux";
import { countInCart } from "../../../redux/offersRedux";

import styles from "./Header.module.scss";

const Component = ({ className, children, amountInCart }) => {
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
              <Link to={"/offers/rivieramaya"} className={styles.navItem}>
                Riviera Maya
              </Link>
              <Link to={"/offers/oaxaca"} className={styles.navItem}>
                Oaxaca
              </Link>
              <Link to={"/offers/chiapas"} className={styles.navItem}>
                Chiapas
              </Link>
              <Link to={"/offers/jalisco"} className={styles.navItem}>
                Jalisco
              </Link>
              <Link to={"/offers/cdmx"} className={styles.navItem}>
                Ciudad de Mexico
              </Link>
              <Link to={"/offers/huastecapotosina"} className={styles.navItem}>
                Huasteca Potosina
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
            <Badge color="secondary" badgeContent={amountInCart}>
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

const mapStateToProps = (state) => ({
  amountInCart: countInCart(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Header,
  Container as Header,
  Component as HeaderComponent,
};
