import React from "react";
import styles from "./UserInfo.module.css";
import { connect } from "react-redux";
import Avatar from "../avatar/Avatar";

class UserInfo extends React.Component {
  render() {
    const userImageUrl =
      this.props.user?.userProfileImage?.imageSmallSource || "";
    const userName = this.props?.user?.user.userName || "";

    return (
      <div className={`${styles.userInfo} d-flex align-center gap-10`}>
        <Avatar url={userImageUrl} width={40} />
        <span className="fs-x fw-regular">{userName}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(UserInfo);
