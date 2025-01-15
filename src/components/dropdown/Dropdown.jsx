import React from "react";
import styles from "./Dropdown.module.css";

class Dropdown extends React.Component {
  render() {
    return (
      <div className={`${styles.dropdown}`}>
        <img className="img-40" src="../assets/menu.svg" alt="menu icon" />
      </div>
    );
  }
}
export default Dropdown;
