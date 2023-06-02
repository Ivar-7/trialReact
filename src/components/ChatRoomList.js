import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { database } from "../firebaseConfig";
import "firebase/database";

const ChatRoomList = ({ user }) => {
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    const chatRoomsRef = database.ref("chatRooms");

    // Fetch chat room data from Firebase Realtime Database
    chatRoomsRef.on("value", (snapshot) => {
      const rooms = snapshot.val();
      if (rooms) {
        const chatRoomList = Object.keys(rooms).map((roomId) => ({
          id: roomId,
          name: rooms[roomId].name,
          participants: rooms[roomId].participants,
        }));
        setChatRooms(chatRoomList);
      }
    });

    // Clean up the event listener on component unmount
    return () => {
      chatRoomsRef.off();
    };
  }, []);

  return (
    <div className="chat-room-list">
      <h2>Chat Rooms</h2>
      <ul>
        {chatRooms.map((room) => (
          <li key={room.id}>
            <Link to={`/chatroom/${room.id}`}>
              {room.name} ({room.participants.length})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatRoomList;
