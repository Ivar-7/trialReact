import React from "react";

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <div key={message.id} className="message">
          <div className="sender">{message.sender}</div>
          <div className="content">{message.content}</div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
