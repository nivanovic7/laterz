import React from "react";
import styles from "./Post.module.css";

class Posts extends React.Component {
  render() {
    return (
      <h3 key={this.props.post._id}>{this.props.post.outfitDescription}</h3>
    );
  }
}

export default Posts;
