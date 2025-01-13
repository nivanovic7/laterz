import React from "react";
import Post from "../post/Post";

class Posts extends React.Component {
  render() {
    return this.props.posts.data.map((post) => <Post post={post} />);
  }
}

export default Posts;
