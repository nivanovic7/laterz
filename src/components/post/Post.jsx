import React from "react";
import styles from "./Post.module.css";
import AddComment from "../addComment/AddComment";
import InteractionButtons from "../interactionButtons/InteractionButtons";

class Posts extends React.Component {
  render() {
    return (
      <div className={`${styles.post} bg-neutral b-radius-secondary`}>
        <div className={`${styles.postImages}`}>
          <img
            src={this.props.post.outfitImages[0].imageMediumSource}
            alt="Post image"
          />
        </div>

        <div className={`${styles.postContent}`}>
          <img
            className={`${styles.avatar} img-36 b-radius-circle`}
            src={
              this.props.post.user[0].avatar?.imageSmallSource ||
              "https://picsum.photos/200"
            }
            alt="User avatar"
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
