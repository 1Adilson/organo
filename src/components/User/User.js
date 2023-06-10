import "./User.css";

import React from "react";

const User = (props) => {
  return (
    <div className="user">
      <div className="header">
        <img src={props.userImg} alt=""></img>
      </div>
      <div className="footer">
        <h4>{props.userName}</h4>
        <h5>{props.userOficce}</h5>
      </div>
    </div>
  );
};

export default User;
