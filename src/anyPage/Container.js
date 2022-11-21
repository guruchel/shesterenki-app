import React from "react";
import styles from "./container.module.css";

const Container = ({ maxWidth, children }) => {
  return (
    <div className={styles.containterStyle} style={{ maxWidth: maxWidth }}>
      {children}
    </div>
  );
};

export default React.memo(Container);
