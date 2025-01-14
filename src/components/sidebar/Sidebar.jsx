import React from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    return (
      <aside
        className={`${styles.aside} d-flex-col gap-20 b-radius-primary bg-neutral px-m py-m`}
      >
        <NavLink to="/">
          <div className={`${styles.socialise} fs-xl fw-medium clr-neutral`}>
            Socialise
          </div>
        </NavLink>
        <NavLink to="shoutouts">
          <div
            className={`${styles.shoutouts} fs-xl fw-medium clr-neutral b-radius-tertiary`}
          >
            <span>Shout</span>
            <span className={`fs-l`}>Outs</span>
          </div>
        </NavLink>
        <NavLink to="localhub">
          <div className={`${styles.localhub} fs-xl fw-medium clr-neutral`}>
            <span>Local</span>
            <span className={`fs-l`}>Hub</span>
          </div>
        </NavLink>
        <NavLink to="outfits">
          <div className={`${styles.outfits} fs-xl fw-medium clr-neutral`}>
            Outfits
          </div>
        </NavLink>
      </aside>
    );
  }
}

export default Sidebar;
