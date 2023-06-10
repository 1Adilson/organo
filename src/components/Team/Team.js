import React from "react";
import "./Team.css";
import User from "../User/User";

const Team = (props) => {
  return (
    props.users.length > 0 && (
      <section
        className="teamContainer"
        style={{ backgroundColor: props.secundaryColor }}
      >
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        <div className="users">
          {props.users.map((item) => {
            return (
              <User
                color={props.primaryColor}
                key={item.name}
                userName={item.name}
                userOficce={item.office}
                userImg={item.image}
              ></User>
            );
          })}
        </div>
      </section>
    )
  );
};

export default Team;
