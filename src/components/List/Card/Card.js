import React from "react";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={"./zagluska.jpg"} />
      <div className={styles.rightPart}>
        <h3 className={styles.price}>30 000₽</h3>
        <h5 className={styles.vendorCode}>137389473</h5>
        <h4 className={styles.title}>Название запчасти Название запчасти</h4>
        <p className={styles.description}>
          Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский
          набор слов, но это не совсем так. Его корни уходят в один
        </p>
      </div>
    </div>
  );
};

export default React.memo(Card);
