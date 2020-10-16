import React from "react";

import "./styl.css";

function convertDate(timestamp) {
  const datetime = new Date(timestamp);

  let hours = datetime.getHours();
  let min = datetime.getMinutes();
  let sec = datetime.getSeconds();

  if (min < 10) {min = "0"+min;}
  if (sec < 10) {sec = "0"+sec;}

  return (hours+':'+min+':'+sec);
}

function Message({ message }) {
  return (
    <div className="message">
      <div className="message--user">
        {message.user}{" "}
        <span className="message--time">{convertDate(message.datetime)}</span>
      </div>
      <div className="message--content">{message.content}</div>
    </div>
  );
}

export default Message;
