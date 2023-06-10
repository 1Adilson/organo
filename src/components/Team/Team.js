import React from "react";
import "./Team.css";
import User from "../User/User";
// import User from "../User/User";

const Team = (props) => {
  return (
    <section
      className="teamContainer"
      style={{ backgroundColor: props.secundaryColor }}
    >
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className="users">
        {props.users.map((item) => {
          return (
            <User
              userName={item.name}
              userOficce={item.office}
              userImg={item.image}
            ></User>
          );
        })}
      </div>
    </section>
  );
};

export default Team;
