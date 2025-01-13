import React from "react";
import Layout from "./components/layout/Layout";
import { connect } from "react-redux";
import { login } from "./redux/actions/authActions";

class App extends React.Component {
  componentDidMount() {
    this.props.login();
  }
  render() {
    return <Layout />;
  }
}

const mapStateToProps = (state) => ({
  data: state,
});

export default connect(mapStateToProps, { login })(App);
