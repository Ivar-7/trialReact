import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

// Import your custom components
import Header from "./components/Header";
import ChatRoomList from "./components/ChatRoomList";
import ChatRoom from "./components/ChatRoom";
import AuthForm from "./components/AuthForm";

// Configure your Firebase app
const firebaseConfig = {
  // Add your Firebase configuration details here
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already authenticated
    firebase.auth().onAuthStateChanged((user) => {
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
          <Switch>
            <Route exact path="/">
              {user ? <ChatRoomList user={user} /> : <AuthForm />}
            </Route>
            <Route path="/chatroom/:id">
              {user ? <ChatRoom user={user} /> : <AuthForm />}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
