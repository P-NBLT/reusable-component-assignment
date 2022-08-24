import React from "react";
import styles from "./FeeCard.module.css";
import styleText from "../../styles/Text.module.css";

export let css;

const FeeCard = ({ css, background, children }) => {
  const img = background ? styles["background"] : "";
  const card = styles["card"];
  css = css;

  return (
    <div className={`${card} ${styles[css[0]]} ${img}`}>
      <div>
        {children[0]}
        {children[1]}
        {children[2]}
      </div>
      <div className={styles[css[1]]}>
        {children[3]}
        {children[4]}
        {children[5]}
        {children[6]}
      </div>
    </div>
  );
};

export default FeeCard;
