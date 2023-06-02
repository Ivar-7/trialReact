import React from "react";

const UserStatus = ({ user }) => {
  return (
    <div className="user-status">
      <h2>User Status</h2>
      {user ? <p>Logged in as: {user.displayName}</p> : <p>Not logged in</p>}
    </div>
  );
};

export default UserStatus;
