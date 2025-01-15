import React from "react";
import styles from "./PostText.module.css";

class PostText extends React.Component {
  render() {
    return (
      <>
        <p className={`clr-heading fs-l fw-bold`}>{this.props.userName}</p>
        <p className={`clr-accent fs-l fw-bold`}>{this.props.description}</p>
        <p className={`clr-body fs-m`}>
          Paradise Beach description here dolor sit amet, consectetur adipiscing
          elit, eiusmod tempor incididunt. Dolor sit amet, e adipiscing elit.
        </p>
      </>
    );
  }
}

export default PostText;
