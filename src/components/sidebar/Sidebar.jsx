import React from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { SET_HEADING } from "../../redux/types";
import SidebarLink from "../sidebarLink/SidebarLink";

class Sidebar extends React.Component {
  render() {
    return (
      <aside
        className={`${styles.aside} ${
          this.props.ui.menuOpen && styles.menuOpen
        } d-flex-col gap-20 b-radius-primary bg-neutral px-m py-m`}
      >
        <SidebarLink id="socialise" heading="Socialise" />
        <SidebarLink id="shout-outs" heading="Shout outs" />
        <SidebarLink id="local-hub" heading="Local Hub" />
        <SidebarLink id="outfits" heading="Outfits" />
      </aside>
    );
  }
}

const mapStateToProps = (state) => ({
  ui: state.ui,
});

export default connect(mapStateToProps)(Sidebar);
