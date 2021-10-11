import { useRef } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const nameInputRef = useRef();
  const addrInputRef = useRef();
  const postcodeInputRef = useRef();
  const mobileInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAddr = addrInputRef.current.value;
    const enteredPostcode = postcodeInputRef.current.value;
    const enteredMobile = mobileInputRef.current.value;
    console.log(enteredName);
    console.log(enteredAddr);
    console.log(enteredPostcode);
    console.log(enteredMobile);
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Employee Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Delivery Address</label>
        <input type="text" id="address" ref={addrInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postcode">Postcode</label>
        <input type="text" id="postcode" ref={postcodeInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="mobile">Contact mobile</label>
        <input type="text" id="mobile" ref={mobileInputRef} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
