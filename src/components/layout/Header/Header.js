import React, { useState } from "react";
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
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";

import clsx from "clsx";

import { connect } from "react-redux";
import { countInCart } from "../../../redux/offersRedux";

import styles from "./Header.module.scss";

const Component = ({ className, children, amountInCart }) => {
  const [menu, setMenu] = useState(false);
  const showMenu = () => setMenu(!menu);
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.container}>
        <div className={styles.container__logo}>
          <div className={styles.logo}>
            {" "}
            <Link to={"/"}>
              <img src="/images/logo.png" alt="Logo" title="REALMexico" />
            </Link>
          </div>
        </div>

        <div className={styles.container__navbar + " " + styles.menuBig}>
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
        <div className={styles.container__buttons}>
          <div className={styles.cart}>
            <Link to={"/cart"} className={styles.link}>
              <Badge color="primary" badgeContent={amountInCart}>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className={styles.icon}
                />
              </Badge>
            </Link>
          </div>

          <div className={styles.hamburger}>
            <FontAwesomeIcon
              onClick={showMenu}
              className={styles.icon}
              icon={faBars}
            >
              x
            </FontAwesomeIcon>
          </div>
        </div>
      </div>
      {menu ? (
        <div className={styles.menuSmall}>
          <Navbar light expand="md">
            <Nav className={clsx("ml-auto", styles.list)} navbar>
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
            </Nav>
          </Navbar>
        </div>
      ) : null}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  amountInCart: PropTypes.number,
};

const mapStateToProps = (state) => ({
  amountInCart: countInCart(state),
});


const Container = connect(mapStateToProps)(Component);

export {
  Container as Header,
  Component as HeaderComponent,
};
