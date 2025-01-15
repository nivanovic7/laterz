import React from "react";
import styles from "./Avatar.module.css";

class Avatar extends React.Component {
  render() {
    return (
      <img
        className={`${styles.avatar} img-${this.props.width} b-radius-circle`}
        src={this.props.url || "https://picsum.photos/200"}
        alt="User avatar"
      />
    );
  }
}

export default Avatar;
