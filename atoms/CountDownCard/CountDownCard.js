import React from "react";
import styles from "./CountDownCard.module.css";
// import styled from "styled-components";

// const TimeCards = styled.h6`
//   color: green;
// `;

const CountDownCard = ({ children, css }) => {
  console.log(children);
  console.log(css.color, styles[`card--${css.color}`]);
  const cardColor = styles[`card--${css.color}`];
  const cardsize = styles[`card--size`];
  return (
    <div className={`${cardColor} ${cardsize}`}>
      {children[0]} {children[1]}
    </div>
  );
};

export default CountDownCard;
