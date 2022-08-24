import React from "react";
import Button from "../Button/Button";
// import Button from "../Button/Button";
import styles from "./Title.module.css";
// import { Tag } from "../../Data/dataBase";

const Title = ({ text, classN, button }) => {
  return (
    <div className={styles[classN]}>
      <h1>{text.title}</h1>
      <p>{text.info}</p>
      {button}
    </div>
  );
};

export default Title;
