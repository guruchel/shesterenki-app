import React from "react";
import { useMobile } from "../../hooks/useMediaQuery";
import styles from "./header.module.css";

const Header = () => {
  const isMobile = useMobile();
  console.log(isMobile);
  return (
    <header className={styles.header}>
      {isMobile && (
        <button className={styles.mobileButton}>
          <span />
        </button>
      )}
      <h1 className={styles.title}>СПЕЦТЕХНИКА.74</h1>
      {!isMobile && (
        <ul className={styles.ul}>
          <li className={styles.li}>Реквизиты</li>
          <li className={styles.li}>Обратная связь</li>
          <li className={styles.li}>Контакты</li>
          <li className={styles.li}>Каталог</li>
        </ul>
      )}
    </header>
  );
};

export default React.memo(Header);
