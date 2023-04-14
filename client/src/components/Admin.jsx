import React from "react";
import MailApp from './MailApp';

const Admin = () => {
    return (
      <div>
        <h1>Admin</h1>
      </div>
     
    );
  };
  React.render(<MailApp mailboxes={admin} />, document.body)
  export default Admin;