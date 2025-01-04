import React from "react";

class Posts extends React.Component {
  render() {
    return this.props.posts.data.map((post) => (
      <h3 key={post._id}>{post.outfitDescription}</h3>
    ));
  }
}

export default Posts;
