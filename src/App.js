import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./firebaseConfig";
import "firebase/auth";

// Import your custom components
import Header from "./components/Header";
import ChatRoomList from "./components/ChatRoomList";
import ChatRoom from "./components/ChatRoom";
import AuthForm from "./components/AuthForm";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already authenticated
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header user={user} />

        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={user ? <ChatRoomList user={user} /> : <AuthForm />}
            />

            <Route
              path="/chatroom/:id"
              element={user ? <ChatRoom user={user} /> : <AuthForm />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
