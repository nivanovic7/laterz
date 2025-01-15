import React from "react";
import Logo from "../logo/Logo";
import styles from "./Header.module.css";
import { connect } from "react-redux";
import Dropdown from "../dropdown/Dropdown";

class Header extends React.Component {
  render() {
    const userImageUrl =
      this.props.user?.userProfileImage?.imageSmallSource || "";
    const userName = this.props?.user?.user.userName || "";
    return (
      <header className={`${styles.header} d-grid-custom px-20 `}>
        <Logo />
        <h1
          className={`${styles.title} d-flex align-center px-20  clr-heading fw-bold`}
        >
          {this.props.ui.heading}
        </h1>
        <div className={`${styles.userInfo} d-flex align-center gap-10`}>
          <img
            className={`${styles.userImage} img-40 b-radius-circle`}
            src={`${userImageUrl}`}
            alt="user image"
          />
          <span className="fs-x fw-regular">{userName}</span>
        </div>
        <Dropdown />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  ui: state.ui,
});

export default connect(mapStateToProps)(Header);
