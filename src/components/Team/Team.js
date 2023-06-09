import React from "react";
import "./Team.css";

const Team = (props) => {
  return (
    <section
      className="TeamContainer"
      style={{ backgroundColor: props.secundaryColor }}
    >
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
    </section>
  );
};

export default Team;
