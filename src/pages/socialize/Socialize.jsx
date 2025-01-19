import React from "react";
import styles from "./Socialize.module.css";
import { fetchData } from "../../redux/actions/postActions";
import { connect } from "react-redux";
import Posts from "../../components/posts/Posts";
import Loader from "../../components/loader/Loader";

class Socialize extends React.Component {
  componentDidMount() {
    const { page } = this.props;
    this.props.fetchData(page);
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { isLoading, page, hasMore } = this.props;
    if (
      window.innerHeight + document.documentElement.scrollTop + 10 >=
        document.documentElement.offsetHeight &&
      !isLoading &&
      hasMore
    ) {
      this.props.fetchData(page);
    }
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { posts, isLoading, hasMore } = this.props;
    return (
      <div>
        {posts && <Posts posts={posts} />}
        {isLoading && <Loader />}
        {!hasMore && <p className={`${styles.message}`}>You've seen it all</p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authLoading: state.auth.loading,
  page: state.post.page,
  isLoading: state.post.isLoading,
  posts: state.post.posts,
  hasMore: state.post.hasMore,
});

export default connect(mapStateToProps, { fetchData })(Socialize);
