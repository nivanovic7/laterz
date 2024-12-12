import RoutesComponent from "../routesComponent/RoutesComponent";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <>
      <header>Header placeholder</header>
      <main>
        <aside>Left aside</aside>
        <RoutesComponent />
        <aside>right Aside</aside>
      </main>
      <footer>Footer placeholder</footer>
    </>
  );
}

export default Layout;
