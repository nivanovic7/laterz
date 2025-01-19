import styles from "./Posts.module.css";

import React from "react";
import Post from "../post/Post";

class Posts extends React.Component {
  render() {
    return (
      <div className={`${styles.posts} d-flex-col gap-20`}>
        {this.props.posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    );
  }
}

export default Posts;
