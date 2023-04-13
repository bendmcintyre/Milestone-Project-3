import React, { Component } from 'react'; 
import Mailbox from './Mailbox';
import MailboxList from './MailboxList';
import NoneSelected from './NoneSelected';

class MailApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mailbox_id: null,
    };
  }

  handleSelectMailbox = (id) => {
    this.setState({ mailbox_id: id })
  };

  render() {
    const { mailboxes } = this.props;
    const { mailbox_id } = this.state;

    let selected_mailbox;
    if (mailbox_id !== null) {
      const mailbox = mailboxes.find(mailbox => mailbox.id === mailbox_id);
      selected_mailbox = <Mailbox key={mailbox.id} emails={mailbox.emails} />;
    } else {
      selected_mailbox = <NoneSelected text="mailbox" />;
    }

    return (
      <div className="app row">
        <MailboxList
          mailboxes={mailboxes}
          onSelectMailbox={this.handleSelectMailbox}
        />
        <div className="mailbox col-md-10">
          <div className="panel panel-default">
            <div className="panel-body">{selected_mailbox}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MailApp;