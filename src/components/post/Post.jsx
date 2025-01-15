import React from "react";
import styles from "./Post.module.css";
import AddComment from "../addComment/AddComment";
import InteractionButtons from "../interactionButtons/InteractionButtons";
import PostImages from "../postImages/PostImages";
import Avatar from "../avatar/Avatar";
import PostText from "../postText/PostText";

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
          <div className={`${styles.postBody} d-flex-col gap-10`}>
            <InteractionButtons />
            <PostText
              description={this.props.post.outfitDescription}
              userName={this.props.post.user[0].name}
            />
            <AddComment />
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
