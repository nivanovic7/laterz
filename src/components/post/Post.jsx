import React from "react";
import styles from "./Post.module.css";

class Posts extends React.Component {
  render() {
    console.log(this.props.post);
    return (
      <div className={`${styles.post} bg-neutral b-radius-secondary`}>
        <div className="postImages">
          <img
            src={this.props.post.outfitImages[0].imageMediumSource}
            alt="Post image"
          />
          <div className={`${styles.postContent}`}>
            <img
              className={`${styles.avatar} img-36 b-radius-circle`}
              src={
                this.props.post.user[0].avatar?.imageSmallSource ||
                "https://picsum.photos/200"
              }
              alt="User avatar"
            />
            <div>
              <p>User Name</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
