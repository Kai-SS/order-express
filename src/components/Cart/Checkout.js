import React from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Employee Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Delivery Address</label>
        <input type="text" id="address" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postcode">Postcode</label>
        <input type="text" id="postcode" />
      </div>
      <div className={classes.control}>
        <label htmlFor="mobile">Contact mobile</label>
        <input type="text" id="mobile" />
      </div>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
