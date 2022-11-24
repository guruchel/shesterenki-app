import React from "react";
import styles from "./Card.module.css";
import FullView from "./FullView/FullView";
import { useCard } from "./useCard";

const Card = ({ title, image, price, vendorCode, description, position }) => {
  const { isMobile, isShow, handleShowFull, handleClickOut } = useCard();
  return (
    <div className={styles.wrapper} onClick={handleShowFull}>
      <img className={styles.img} src={image} />
      <div className={styles.rightPart}>
        <h3 className={styles.price}>{price}</h3>
        {!isMobile && <h5 className={styles.vendorCode}>{vendorCode}</h5>}
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
        {isMobile && <h5 className={styles.vendorCode}>137389473</h5>}
      </div>
      {isShow && (
        <FullView
          position={position}
          title={title}
          image={image}
          price={price}
          vendorCode={vendorCode}
          description={description}
          handleClickOut={handleClickOut}
        />
      )}
    </div>
  );
};

export default React.memo(Card);
