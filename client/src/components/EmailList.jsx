import React, { Component } from 'react';
import EmailListItem from './EmailListItem';

class EmailList extends Component {
  render() {
    const { emails, onSelectEmail } = this.props;
    const email_list = emails.map((mail) => (
      <EmailListItem
        key={mail.id}
        from={mail.from}
        to={mail.to}
        subject={mail.subject}
        on_click={() => onSelectEmail(mail.id)}
      />
    ));

    return (
      <table className="email-list table table-striped table-condensed">
        <thead>
          <tr>
            <th>Subject</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>{email_list}</tbody>
      </table>
    );
  }
}

export default EmailList;
