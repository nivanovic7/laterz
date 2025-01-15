import React from "react";
import styles from "./SidebarLink.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { SET_HEADING } from "../../redux/types";
class SidebarLink extends React.Component {
  render() {
    const { id, heading } = this.props;
    const path = id === "socialise" ? "/" : id;
    return (
      <NavLink
        to={path}
        onClick={() => {
          this.props.dispatch({
            type: SET_HEADING,
            payload: this.props.heading,
          });
        }}
      >
        <div id={id} className={`fs-xl fw-medium clr-neutral`}>
          {heading}
        </div>
      </NavLink>
    );
  }
}

const mapStateToProps = (state) => ({
  ui: state.ui,
});

export default connect(mapStateToProps)(SidebarLink);
