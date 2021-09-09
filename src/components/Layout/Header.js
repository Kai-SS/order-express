import { Fragment } from "react";
import headerImage from "../../assets/header_background.png";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Order Express</h1>
        <HeaderCartButton onClick={props.onShownCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImage} alt="header background" />
      </div>
    </Fragment>
  );
};

export default Header;
