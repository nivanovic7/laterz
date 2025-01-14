import React from "react";
import styles from "./Socialize.module.css";
import { fetchData } from "../../redux/actions/postActions";
import { connect } from "react-redux";
import Posts from "../../components/posts/Posts";

class Socialize extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { posts, isLoading } = this.props.data.post;
    return (
      <div>
        {isLoading && <p>Loading...</p>}
        {posts.data && <Posts posts={posts} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state,
  authLoading: state.auth.loading,
  user: state.auth.user,
});

export default connect(mapStateToProps, { fetchData })(Socialize);
