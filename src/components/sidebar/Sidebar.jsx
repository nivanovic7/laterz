import React from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Sidebar extends React.Component {
  render() {
    return (
      <aside
        className={`${styles.aside} ${
          this.props.ui.menuOpen && styles.menuOpen
        } d-flex-col gap-20 b-radius-primary bg-neutral px-m py-m`}
      >
        <NavLink to="/">
          <div
            id="socialise"
            className={`${styles.socialise} fs-xl fw-medium clr-neutral`}
          >
            Socialise
          </div>
        </NavLink>
        <NavLink to="shoutouts">
          <div
            id="shoutouts"
            className={`${styles.shoutouts} fs-xl fw-medium clr-neutral b-radius-tertiary`}
          >
            <span>Shout</span>
            <span className={`fs-l`}>Outs</span>
          </div>
        </NavLink>
        <NavLink to="localhub">
          <div
            id="localhub"
            className={`${styles.localhub} fs-xl fw-medium clr-neutral`}
          >
            <span>Local</span>
            <span className={`fs-l`}>Hub</span>
          </div>
        </NavLink>
        <NavLink to="outfits">
          <div
            id="outfits"
            className={`${styles.outfits} fs-xl fw-medium clr-neutral`}
          >
            Outfits
          </div>
        </NavLink>
      </aside>
    );
  }
}

const mapStateToProps = (state) => ({
  ui: state.ui,
});

export default connect(mapStateToProps)(Sidebar);
