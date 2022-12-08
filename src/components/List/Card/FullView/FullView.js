import React from "react";
import styles from "./FullView.module.css";
import ReactDOM from "react-dom";
import { useFullVisible } from "./useFullView";
import { useMobile } from "../../../../hooks/useMediaQuery";

const FullView = ({
  position,
  handleClickOut,
  title,
  image,
  price,
  vendorCode,
  description,
}) => {
  useFullVisible(handleClickOut);
  const isMobile = useMobile();
  const classWrapper = position;
  return (
    <>
      {!isMobile && (
        <div className={styles[classWrapper]}>
          <img className={styles.img} src={image} />
          <div className={styles.rightSide}>
            <div className={styles.TopWrapper}>
              <h4 className={styles.price}>{price} ₽</h4>
              <h5 className={styles.vendorCode}>{vendorCode}</h5>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      )}
      {isMobile &&
        ReactDOM.createPortal(
          <div className={styles.overlay}>
            <div className={styles.wrapper}>
              <img className={styles.img} src={image} />
              <div className={styles.rightSide}>
                <div className={styles.TopWrapper}>
                  <h4 className={styles.price}>{price} ₽</h4>
                </div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <h5 className={styles.vendorCode}>{vendorCode}</h5>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default React.memo(FullView);
