import React from "react";
import "./Team.css";
import User from "../User/User";

const Team = (props) => {
  return (
    <section
      className="TeamContainer"
      style={{ backgroundColor: props.secundaryColor }}
    >
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <User />
    </section>
  );
};

export default Team;
