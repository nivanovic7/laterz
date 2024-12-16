import styles from "./Logo.module.css";

function Logo() {
  return (
    <img className={`${styles.logo}`} src="./assets/logo.svg" alt="logo" />
  );
}

export default Logo;
