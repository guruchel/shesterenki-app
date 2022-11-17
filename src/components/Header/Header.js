import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return <header className={styles.header}>header</header>;
};

export default React.memo(Header);
