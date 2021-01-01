import React from "react";
import "./ChatterBox.css";

const ChatterBox = (props) => {
  return (
    <div className="chat">
      <div>{props.username.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
      <div>{props.roomname.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
      <div>{props.date}</div>
      <div>{props.text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
    </div>
  );
};

export default ChatterBox;
