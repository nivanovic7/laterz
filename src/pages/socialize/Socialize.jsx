import React from "react";
import styles from "./Socialize.module.css";
import { fetchData } from "../../redux/actions/postActions";
import { connect } from "react-redux";
import Posts from "../../components/posts/Posts";

class Socialize extends React.Component {
  componentDidMount() {
    const { page } = this.props;
    this.props.fetchData(page);
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { isLoading, page } = this.props;
    console.log(isLoading);
    if (
      window.innerHeight + document.documentElement.scrollTop + 10 >=
        document.documentElement.offsetHeight &&
      !isLoading
    ) {
      this.props.fetchData(page);
    }
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { posts, isLoading } = this.props;
    return (
      <div className="soc">
        {isLoading && <p>Loading...</p>}
        {posts && <Posts posts={posts} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authLoading: state.auth.loading,
  page: state.post.page,
  isLoading: state.post.isLoading,
  posts: state.post.posts,
});

export default connect(mapStateToProps, { fetchData })(Socialize);
