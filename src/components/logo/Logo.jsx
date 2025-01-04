import React from "react";
import styles from "./Logo.module.css";

class Logo extends React.Component {
  render() {
    return (
      <img className={`${styles.logo}`} src="./assets/logo.svg" alt="logo" />
    );
  }
}

export default Logo;
