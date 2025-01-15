import React from "react";
import Logo from "../logo/Logo";
import styles from "./Header.module.css";
import { connect } from "react-redux";
import Dropdown from "../dropdown/Dropdown";
import UserInfo from "../userInfo/UserInfo";

class Header extends React.Component {
  render() {
    const { heading } = this.props.ui;
    return (
      <header className={`${styles.header} d-grid-custom px-20 `}>
        <Logo />
        <h1
          className={`${styles.title} d-flex align-center px-20  clr-heading fw-bold`}
        >
          {heading}
        </h1>
        <UserInfo />
        <Dropdown />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  ui: state.ui,
});

export default connect(mapStateToProps)(Header);
