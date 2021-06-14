import React from "react";
import styles from "./BeerCard.module.scss";

const BeerCard = (props) => {
  const { name, info, img } = props;
  return (
    <div className={styles.card}>
      <img src={img} alt="beer" />
      <h2>{name}</h2>
      <p> {info}</p>
    </div>
  );
};

export default BeerCard;
