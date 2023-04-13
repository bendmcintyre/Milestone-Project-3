import React, { Component } from 'react';

class MailboxList extends Component {
  render() {
    const { mailboxes = [], onSelectMailbox } = this.props;
    const mailbox_list = mailboxes.map((mailbox) => (
      <li
        className="list-group-item"
        key={mailbox.id}
        onClick={() => onSelectMailbox(mailbox.id)}
      >
        <span className="badge">{mailbox.emails.length}</span>
        {mailbox.name}
      </li>
    ));

    return (
      <div className="col-md-2">
        <ul className="mailboxes list-group">{mailbox_list}</ul>
      </div>
    );
  }
}

export default MailboxList;
