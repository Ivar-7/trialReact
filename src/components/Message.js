import React from "react";

const Message = ({ sender, content }) => {
  return (
    <div className="message">
      <div className="sender">{sender}</div>
      <div className="content">{content}</div>
    </div>
  );
};

export default Message;
