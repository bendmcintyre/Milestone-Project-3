import React, { Component } from 'react'; 
import Mailbox from './Mailbox';
import MailboxList from './MailboxList';
import NoneSelected from './NoneSelected';
import { render } from 'react-dom';


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
var admin = [
  {
    id: 1,
    name: "Inbox",
    emails: [
      {
        id: 1,
        from: "joe@tryolabs.com",
        to: "fernando@tryolabs.com",
        subject: "Meeting",
        body: "hi",
      },
      {
        id: 2,
        from: "newsbot@tryolabs.com",
        to: "fernando@tryolabs.com",
        subject: "News Digest",
        body: "<h1>Intro to React</h1> <img src='https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png' width=300/)>",
      },
    ],
  },
  {
    id: 2,
    name: "Spam",
    emails: [
      {
        id: 3,
        from: "nigerian.prince@gmail.com",
        to: "fernando@tryolabs.com",
        subject: "Obivous 419 scam",
        body: "You've won the prize!!!1!1!!!",
      },
    ],
  },
]
render(<MailApp mailboxes={admin} />, document.getElementById('root'))


export default MailApp;