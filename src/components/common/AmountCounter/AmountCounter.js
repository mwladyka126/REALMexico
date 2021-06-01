import React, { useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";

import clsx from "clsx";

import styles from "./AmountCounter.module.scss";

const Component = ({ className, quantity, maxNumber, defaultValue }) => {
  const [count, setCount] = useState(defaultValue || 0);

  const handleIncrease = (quantity) => {
    if (quantity >= 0) {
      setCount(quantity + 1);
    }
  };

  const handleDecrease = (quantity) => {
    if (quantity > 0) {
      setCount(quantity - 1);
    }
  };

  const handleChange = (value) => {
    if (quantity > 0) {
      setCount(value);
    } else if (quantity === 0) {
      setCount(value);
    }
  };
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.wrapper}>
        <Button
          variant="contained"
          onClick={() => handleDecrease(count)}
          disabled={parseInt(count) <= 0 ? true : false}
          className={styles.button}
        >
          <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
        </Button>
        <input
          onChange={(e) => handleChange(parseInt(e.target.value))}
          type="text"
          value={count}
          className={styles.input}
        ></input>
        <Button
          variant="contained"
          onClick={() => handleIncrease(count)}
          disabled={parseInt(count) >= maxNumber ? true : false}
          className={styles.button}
        >
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </Button>
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
  Component as AmountCounter,
  // Container as AmountCounter,
  Component as AmountCounterComponent,
};
