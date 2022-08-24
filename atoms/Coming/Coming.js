import React from "react";
import styles from "./Coming.module.css";

const Coming = ({ css }) => {
  const color1 = styles[css.color1];
  const color2 = styles[css.color2];
  const container = styles["container"];
  return (
    <div className={container}>
      <p className={color1}>COMING </p>
      <p className={color2}>4 NOV 2020</p>
    </div>
  );
};

export default Coming;
