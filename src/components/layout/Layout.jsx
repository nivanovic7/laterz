import Footer from "../header/Footer";
import Header from "../header/Header";
import RoutesComponent from "../routesComponent/RoutesComponent";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles.layout}>
      <div className={`${styles.layoutContent}`}>
        <Header />
        <main className={`${styles.main} d-grid-custom`}>
          <aside className={`${styles.aside}`}>Left aside</aside>
          <RoutesComponent />
          <aside className={`${styles.aside}`}>right Aside</aside>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
