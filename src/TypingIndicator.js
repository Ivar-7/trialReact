import React from "react";

const TypingIndicator = ({ usersTyping }) => {
  return (
    <div className="typing-indicator">
      {usersTyping.length > 0 && (
        <p>
          {usersTyping.join(", ")}{" "}
          {usersTyping.length === 1 ? "is typing" : "are typing"}...
        </p>
      )}
    </div>
  );
};

export default TypingIndicator;
