import React from "react";
import Logo from "../logo/Logo";
import styles from "./Header.module.css";

class Header extends React.Component {
  render() {
    return (
      <header className={`${styles.header} d-grid-custom px-20 `}>
        <Logo />
        <h1
          className={`${styles.title} d-flex align-center px-20  clr-heading fw-bold`}
        >
          Shout outs
        </h1>
        <div className={` d-flex align-center gap-10`}>
          <img
            className={`${styles.user} img-40 b-radius-circle`}
            src="https://fastly.picsum.photos/id/170/200/200.jpg?hmac=2Xh3j3MMZE07_G7UDPgPRm557LRHzyFrkyeWRXdhdvU"
            alt="user"
          />
          <span className="fs-x fw-regular">UserName</span>
        </div>
      </header>
    );
  }
}

export default Header;
