import React from "react";
import Logo from "../logo/Logo";
import styles from "./Header.module.css";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    console.log(this.props.user);
    const userImageUrl =
      this.props.user?.userProfileImage?.imageSmallSource || "";
    const userName = this.props?.user?.user.userName || "";
    return (
      <header className={`${styles.header} d-grid-custom px-20 `}>
        <div>
          <Logo />
        </div>
        <h1
          className={`${styles.title} d-flex align-center px-20  clr-heading fw-bold`}
        >
          Shout outs
        </h1>
        <div className={`${styles.userInfo} d-flex align-center gap-10`}>
          <img
            className={`${styles.userImage} img-40 b-radius-circle`}
            src={`${userImageUrl}`}
            alt="user image"
          />
          <span className="fs-x fw-regular">{userName}</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Header);
