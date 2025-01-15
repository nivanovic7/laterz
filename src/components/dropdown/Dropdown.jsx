import React from "react";
import styles from "./Dropdown.module.css";
import { connect } from "react-redux";
import { TOGGLE_MENU } from "../../redux/types";

class Dropdown extends React.Component {
  render() {
    return (
      <div className={`${styles.dropdown}`}>
        <img
          onClick={() => this.props.dispatch({ type: TOGGLE_MENU })}
          className="img-36"
          src="../assets/menu.svg"
          alt="menu icon"
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  ui: state.ui,
});

export default connect(mapStateToProps)(Dropdown);
