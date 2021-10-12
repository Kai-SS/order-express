import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";

const Checkout = (props) => {
  const [inputValidity, setInputValidity] = useState({
    name: true,
    address: true,
    mobile: true,
  });

  const nameInputRef = useRef();
  const addrInputRef = useRef();
  const mobileInputRef = useRef();
  const notesRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAddr = addrInputRef.current.value;
    const enteredMobile = mobileInputRef.current.value;
    const enteredNotes = notesRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddrIsValid = !isEmpty(enteredAddr);
    const regex = new RegExp("^04[0-9]{8}$");
    const enteredMobileIsValid = regex.test(enteredMobile);

    setInputValidity({
      name: enteredNameIsValid,
      address: enteredAddrIsValid,
      mobile: enteredMobileIsValid,
    });

    const formIsValid =
      enteredNameIsValid && enteredAddrIsValid && enteredMobileIsValid;

    if (!formIsValid) {
      return;
    }
    //submit for data

    console.log(enteredName);
    console.log(enteredAddr);
    console.log(enteredMobile);
    console.log(enteredNotes);
    console.log(enteredNameIsValid);
    console.log(enteredAddrIsValid);
    console.log(enteredMobileIsValid);
  };

  const nameControlClasses = `${classes.control} ${
    inputValidity.name ? "" : classes.invalid
  }`;
  const addrControlClasses = `${classes.control} ${
    inputValidity.address ? "" : classes.invalid
  }`;
  const mobileControlClasses = `${classes.control} ${
    inputValidity.mobile ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Receiver Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!inputValidity.name && <p>Receiver name cannot be blank!</p>}
      </div>
      <div className={addrControlClasses}>
        <label htmlFor="address">Delivery Address</label>
        <input type="text" id="address" ref={addrInputRef} />
        {!inputValidity.address && <p>Delivery address cannot be blank!</p>}
      </div>
      <div className={mobileControlClasses}>
        <label htmlFor="mobile">Contact mobile</label>
        <input type="text" id="mobile" ref={mobileInputRef} />
        {!inputValidity.mobile && (
          <p>Please enter a valid mobile number (04********)!</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="notes">Notes (optional)</label>
        <input type="text" id="notes" ref={notesRef} />
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
