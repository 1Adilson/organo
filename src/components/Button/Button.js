import React from "react";
import "./Button.css";

const Button = (props) => {
  return <button className="myButton">{props.children}</button>;
};

export default Button;
