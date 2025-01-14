import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import RoutesComponent from "../routesComponent/RoutesComponent";
import styles from "./Layout.module.css";
import Sidebar from "../sidebar/Sidebar";

class Layout extends React.Component {
  render() {
    return (
      <div className={styles.layout}>
        <div className={`${styles.layoutContent} mx-auto`}>
          <Header />
          <main className={`${styles.main} d-grid-custom`}>
            <Sidebar />
            <RoutesComponent />
            <aside
              className={`${styles.aside} ${styles.rightAside} b-radius-primary bg-neutral px-m py-m`}
            >
              right Aside
            </aside>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
