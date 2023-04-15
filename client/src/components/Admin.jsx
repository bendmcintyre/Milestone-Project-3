import React from 'react';
import { MailApp, admin } from './MailApp';

const Admin = () => {
  return (
    <div>
      <h1>Admin</h1>
      <MailApp mailboxes={admin} />
    </div>
  );
};

export default Admin;
