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
        {/* <NavLink
          to="shout-outs"
          onClick={() =>
            this.props.dispatch({ type: SET_HEADING, payload: "Shout outs" })
          }
        >
          <div
            id="shoutouts"
            className={`${styles.shoutouts} fs-xl fw-medium clr-neutral b-radius-tertiary`}
          >
            <span>Shout</span>
            <span className={`fs-l`}>Outs</span>
          </div>
        </NavLink>
        <NavLink
          to="local-hub"
          onClick={() =>
            this.props.dispatch({ type: SET_HEADING, payload: "Local hub" })
          }
        >
          <div
            id="localhub"
            className={`${styles.localhub} fs-xl fw-medium clr-neutral`}
          >
            <span>Local</span>
            <span className={`fs-l`}>Hub</span>
          </div>
        </NavLink>
        <NavLink
          to="outfits"
          onClick={() =>
            this.props.dispatch({ type: SET_HEADING, payload: "Outfits" })
          }
        >
          <div
            id="outfits"
            className={`${styles.outfits} fs-xl fw-medium clr-neutral`}
          >
            Outfits
          </div>
        </NavLink> */}
      </aside>
    );
  }
}

const mapStateToProps = (state) => ({
  ui: state.ui,
});

export default connect(mapStateToProps)(Sidebar);
