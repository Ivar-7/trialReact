import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/database";

const ChatRoom = ({ user }) => {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const chatRoomRef = firebase.database().ref(`chatRooms/${id}/messages`);

    // Fetch message data from Firebase Realtime Database
    chatRoomRef.on("value", (snapshot) => {
      const messagesData = snapshot.val();
      if (messagesData) {
        const messageList = Object.keys(messagesData).map((messageId) => ({
          id: messageId,
          sender: messagesData[messageId].sender,
          content: messagesData[messageId].content,
        }));
        setMessages(messageList);
      }
    });

    // Clean up the event listener on component unmount
    return () => {
      chatRoomRef.off();
    };
  }, [id]);

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (newMessage.trim() !== "") {
      const chatRoomRef = firebase.database().ref(`chatRooms/${id}/messages`);
      const newMessageRef = chatRoomRef.push();

      newMessageRef.set({
        sender: user.displayName,
        content: newMessage,
      });

      setNewMessage("");
    }
  };

  return (
    <div className="chat-room">
      <h2>Chat Room {id}</h2>
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <div className="sender">{message.sender}</div>
            <div className="content">{message.content}</div>
          </div>
        ))}
      </div>
      <form className="new-message-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatRoom;
