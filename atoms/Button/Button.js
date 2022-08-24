import React, { useEffect } from "react";
import styles from "./Button.module.css";

const Button = ({ children, ...props }) => {
  const colorStyle = styles[`button--${props.css.color}`];
  const sizeStyle = styles[props.css.size];
  console.log(colorStyle, sizeStyle, props.css.size);

  // let test;
  // console.log(props.css.margin);
  // if (props.css.margin) {
  //   test = { margin: props.css.margin };
  // } else test = null;

  console.log({ ...props.css.style });

  return (
    <button className={`${colorStyle} ${sizeStyle}`} style={props.css.style}>
      {/* {...props} */}
      {children}
    </button>
  );
};

export default Button;
