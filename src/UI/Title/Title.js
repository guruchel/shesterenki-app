import React from "react";
import styles from "./Title.module.css";
const Title = ({ text, customStyle, position }) => {
  const style = customStyle || styles[position] || styles.title;

  return <h2 className={`${style}`}>{text}</h2>;
};
export default React.memo(Title);
