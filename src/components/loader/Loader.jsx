import React from "react";
import styles from "./Loader.module.css";

class Loader extends React.Component {
  render() {
    return (
      <img
        className={`${styles.loader} img-40`}
        src="../assets/loading.svg"
        alt="loading icon"
      />
    );
  }
}

export default Loader;
