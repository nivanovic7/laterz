import styles from "./PostImages.module.css";
import React from "react";

class PostImages extends React.Component {
  render() {
    return (
      <div className={`${styles.postImages}`}>
        <img
          src={this.props.outfitImages[0].imageMediumSource}
          alt="Post image"
        />
      </div>
    );
  }
}

export default PostImages;
