import React from "react";
import styles from "./Socialize.module.css";
import { fetchData } from "../../redux/actions/postActions";
import { connect } from "react-redux";
import Posts from "../../components/posts/Posts";

class Socialize extends React.Component {
  componentDidMount() {
    const { posts, isLoading, page } = this.props;
    this.props.fetchData(page);
    window.addEventListener("scroll", this.handleScroll);
  }

  // fetchItems = () => {
  //   this.setState({ loading: true });

  //   fetch(
  //     `https://laterz.api.exebyte.io/api/outfits?offset=${
  //       this.props.page * 4
  //     }&limit=4}`
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       this.setState({
  //         items: [...items, ...data.data], // Append new items to the existing list
  //         hasMore: data.hasMore, // Set hasMore based on the API response
  //         page: page + 1, // Increment the page number
  //         loading: false,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching items:", error);
  //       this.setState({ loading: false });
  //     });
  // };

  handleScroll = () => {
    const { loading } = this.props;

    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      !loading
    ) {
      this.props.fetchData();
    }
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { posts, isLoading } = this.props.data.post;
    console.log(posts);
    return (
      <div className="soc">
        <h1>SGDFSFG</h1>
        {isLoading && <p>Loading...</p>}
        {posts && <Posts posts={posts} />}
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
