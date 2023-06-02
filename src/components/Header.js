import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig";
import "firebase/auth";

const Header = ({ user }) => {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">Chat App</Link>
      </div>
      <nav>
        <ul>
          {user ? (
            <>
              <li>Welcome, {user.displayName}</li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
