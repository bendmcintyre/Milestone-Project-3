// Login.jsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div>
        <h1>Login</h1>
        <button onClick={() => loginWithRedirect()}>Log in</button>
      </div>
    );
  }

  return (
    <div>
      <h1>You are logged in</h1>
    </div>
  );
};

export default Login;
