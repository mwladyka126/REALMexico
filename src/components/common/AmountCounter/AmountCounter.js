import React, { useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";

import clsx from "clsx";

import styles from "./AmountCounter.module.scss";

const Component = ({ className, maxNumber, defaultValue, setAmount }) => {
  const [count, setCount] = useState(defaultValue || 0);

  const finalAmount = (amount) => {
    if (amount === undefined) {
      return 0;
    } else if (amount < 0) {
      return 0;
    } else if (amount > parseInt(maxNumber)) {
      setCount(maxNumber);
      return maxNumber;
    } else {
      return amount;
    }
  };

  const handleIncrease = () => {
    setCount(parseInt(count) + 1);
    setAmount(parseInt(count) + 1);
  };

  const handleDecrease = () => {
    setCount(Math.max(count - 1, 0));
    setAmount(Math.max(count - 1, 0));
  };

  const handleChange = (event) => {
    setCount(event);
    setAmount(event);
  };
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.wrapper}>
        <Button
          variant="contained"
          onClick={() => handleDecrease()}
          disabled={parseInt(count) <= 1 ? true : false}
          className={styles.button}
          aria-label="reduce"
        >
          <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
        </Button>
        <input
          type="text"
          min="0"
          max={maxNumber}
          value={finalAmount(count)}
          onChange={(event) => handleChange(event.target.value)}
          className={styles.input}
        ></input>
        <Button
          variant="contained"
          onClick={() => handleIncrease()}
          disabled={parseInt(count) >= maxNumber ? true : false}
          className={styles.button}
          aria-label="add"
        >
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </Button>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  maxNumber: PropTypes.number,
  defaultValue: PropTypes.number,
  setAmount: PropTypes.func,
};

export { Component as AmountCounter, Component as AmountCounterComponent };
