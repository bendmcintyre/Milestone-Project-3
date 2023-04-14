import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import MailApp from './MailApp';

const Admin = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div>
        <h1>Admin</h1>
        <button onClick={() => loginWithRedirect()}>Log in</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Admin</h1>
      <h2>Welcome, {user.name}!</h2>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log out
      </button>
      <MailApp mailboxes={['inbox', 'sent', 'drafts']} />
    </div>
  );
};

export default Admin;