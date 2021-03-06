import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Container, Row, Col, Button } from "reactstrap";

import clsx from "clsx";

import styles from "./Footer.module.scss";
import {
  faCalendarAlt,
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <footer className={styles.footer}>
      <Container className={styles.footer__top}>
        <div className={styles.footer__top__title}>
          <p> Contact us </p>
        </div>
        <Row className={styles.footer__top__inner}>
          <Col xs="12" sm="6" md="2" className={styles.footer__top__inner__col}>
            <FontAwesomeIcon
              icon={faEnvelope}
              href="REAL@Mexico.com"
              className={styles.icon}
            />
            <p>By mail</p>
            <p className={styles.link}>
              <a href="mailto:REAL@Mexico.com" className={styles.email}>
                real@mex.com
              </a>
            </p>
          </Col>
          <Col xs="12" sm="6" md="2" className={styles.footer__top__inner__col}>
            <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} />
            <p>During the week</p>
            <p>From 8:00 till 16:00</p>
          </Col>
          <Col xs="12" sm="6" md="2" className={styles.footer__top__inner__col}>
            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            <p>By phone</p>
            <p>+52-1-10766-655</p>
          </Col>
          <Col xs="12" sm="6" md="2" className={styles.footer__top__inner__col}>
            <FontAwesomeIcon icon={faMapMarkedAlt} className={styles.icon} />
            <p>Our agency</p>
            <p>Avenida Merida</p>
          </Col>
          <Col xs="12" sm="6" md="2" className={styles.footer__top__inner__col}>
            <FontAwesomeIcon icon={faMapMarkedAlt} className={styles.icon} />
            <p>On social media</p>
            <div>
              <Link to={`#`}>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  href="#"
                  className={styles.icon}
                />
              </Link>
              <Link to={`#`}>
                <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
              </Link>
              <Link to={`#`}>
                <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
              </Link>
              <Link to={`#`}>
                <FontAwesomeIcon icon={faPinterest} className={styles.icon} />
              </Link>
              <Link to={`#`}>
                <FontAwesomeIcon icon={faGooglePlusG} className={styles.icon} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className={styles.footer__neewsletter}>
        <Row className={styles.footer__neewsletter__inner}>
          <Col
            xs="12"
            sm="12"
            md="7"
            className={styles.footer__neewsletter__inner__col}
          >
            <p>Follow our team of experts, live from our destinations.</p>
            <p>
              Subscribe to our monthly newsletter to receive the latest news and
              tips from our agencies all over the world.
            </p>
          </Col>
          <Col
            xs="12"
            sm="12"
            md="5"
            className={styles.footer__neewsletter__inner__col}
          >
            <input
              icon={faLongArrowAltRight}
              type="text"
              placeholder="Enter your email address"
              required
              className={styles.input}
            />

            <Button className={styles.button}>Subscribe</Button>
          </Col>
        </Row>
      </Container>
    </footer>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export { Component as Footer, Component as FooterComponent };
