import React from "react";
import styles from "./InteractionButtons.module.css";

class InteractionButtons extends React.Component {
  render() {
    return (
      <div className={`${styles.buttons} d-flex gap-20`}>
        <img src="../assets/heart.svg" alt="heart icon" />
        <img src="../assets/comments.svg" alt="comments icon" />
        <img src="../assets/share.svg" alt="share icon" />
      </div>
    );
  }
}

export default InteractionButtons;
