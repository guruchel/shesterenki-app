import React from "react";
import styles from "./List.module.css";
import Container from "../../anyPage/Container";
import Card from "./Card/Card";
import { useList } from "./useList";

const List = () => {
  const { cards, loadingCard, loader } = useList();
  console.log(loadingCard);
  const isTable = window.matchMedia("(max-width: 996px)").matches;
  return (
    <section className={styles.section}>
      <Container maxWidth={1734}>
        <h2 className={styles.title}>ПРОДУКЦИЯ</h2>
        <div className={styles.List}>
          {cards.map((item, i) => {
            let column = i % 3;
            let margin = "margin";
            let position = "wrapper";
            if (!isTable) {
              if (column === 0) {
                margin = "";
                position = "wrapper";
              } else if (column === 2) {
                position = "wrapperRight";
              } else if (column === 1) {
                position = "wrapperCenter";
              }
            } else {
              column = i + (1 % 2);
              if (column === 1) {
                position = "wrapper";
              } else {
                position = "wrapperRight";
              }
            }
            console.log(loadingCard > 540 ? 539 : loadingCard);
            if (i < (loadingCard > 540 ? 540 : loadingCard)) {
              return (
                <Card
                  margin={margin}
                  description={item.description}
                  position={position}
                  price={item.price}
                  title={item.title}
                  vendorCode={item.vendor_code}
                  image={item.image}
                  key={i}
                />
              );
            }
            return null;
          })}
          {<div ref={loader} />}
        </div>
      </Container>
    </section>
  );
};

export default React.memo(List);
