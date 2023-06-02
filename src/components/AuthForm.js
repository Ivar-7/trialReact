import React from "react";
import { auth, provider } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

function AuthForm() {
  const [user, loading, error] = useAuthState(auth);

  const handleGoogleLogin = () => {
    auth.signInWithPopup(provider);
  };

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div>
      <h1>Login</h1>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <>
          <p>Welcome, {user.displayName}!</p>
          <button onClick={handleLogout}>Sign Out</button>
        </>
      ) : (
        <button onClick={handleGoogleLogin}>Sign in with Google</button>
      )}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

export default AuthForm;
