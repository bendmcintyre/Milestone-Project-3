import React, { Component } from 'react';
import NoneSelected from './NoneSelected';
import Email from './Email';
import EmailList from './EmailList';

class Mailbox extends Component {
  constructor(props) {
    super(props);
    this.state = { email_id: null };
    this.handleSelectEmail = this.handleSelectEmail.bind(this);
  }

  handleSelectEmail(id) {
    this.setState({ email_id: id });
  }

  render() {
    const { email_id } = this.state;
    const { emails } = this.props;
    let selected_email;

    if (email_id) {
      const mail = emails.find((mail) => mail.id === email_id);
      selected_email = (
        <Email
          id={mail.id}
          from={mail.from}
          to={mail.to}
          subject={mail.subject}
          body={mail.body}
        />
      );
    } else {
      selected_email = <NoneSelected text="email" />;
    }

    return (
      <div>
        <EmailList emails={emails} onSelectEmail={this.handleSelectEmail} />
        <div className="email-viewer">{selected_email}</div>
      </div>
    );
  }
}

export default Mailbox;