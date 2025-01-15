import React from "react";
import styles from "./Logo.module.css";

class Logo extends React.Component {
  render() {
    return (
      // <img className={`${styles.logo}`} src="./assets/logo.svg" alt="logo" />
      <picture className={`${styles.logo}`}>
        <source srcSet="../assets/logo.svg" media="(min-width: 390px)" />
        <source srcSet="../assets/logo2.svg" media="(max-width: 390px)" />
        <img className={styles.img} src="./assets/logo.svg" alt="logo" />
      </picture>
    );
  }
}

export default Logo;
