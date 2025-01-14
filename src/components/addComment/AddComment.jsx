import React from "react";
import styles from "./AddComment.module.css";

class AddComment extends React.Component {
  render() {
    return (
      <form className={`${styles.form} bg-primary b-radius-tertiary`}>
        <input
          className="b-radius-tertiary"
          placeholder="Your comment here"
          type="text"
        />
        <button type="submit">
          <img src="../assets/send.svg" alt="send icon" />
        </button>
      </form>
    );
  }
}

export default AddComment;
