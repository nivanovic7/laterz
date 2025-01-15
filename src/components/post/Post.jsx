import React from "react";
import styles from "./Post.module.css";
import AddComment from "../addComment/AddComment";
import InteractionButtons from "../interactionButtons/InteractionButtons";
import PostImages from "../postImages/PostImages";
import Avatar from "../avatar/Avatar";

class Posts extends React.Component {
  render() {
    return (
      <div className={`${styles.post} bg-neutral b-radius-secondary`}>
        <PostImages outfitImages={this.props.post.outfitImages} />

        <div className={`${styles.postContent}`}>
          <Avatar
            width={36}
            url={this.props.post.user[0].avatar?.imageSmallSource}
          />
          <div className={`${styles.postText} d-flex-col gap-10`}>
            <InteractionButtons />
            <p className={`clr-heading fs-l fw-bold`}>
              {this.props.post.user[0].name}
            </p>
            <p className={`clr-accent fs-l fw-bold`}>
              {this.props.post.outfitDescription}
            </p>
            <p className={`clr-body fs-m`}>
              Paradise Beach description here dolor sit amet, consectetur
              adipiscing elit, eiusmod tempor incididunt. Dolor sit amet, e
              adipiscing elit.
            </p>
            <AddComment />
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
