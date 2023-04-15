import React, { Component } from 'react';

class Email extends Component {
  render() {
    const { from, to, subject, body } = this.props;
    return (
      <div className="email">
        <dl className="meta dl-horizontal">
          <dt>From</dt>
          <dd>{from}</dd>

          <dt>To</dt>
          <dd>{to}</dd>

          <dt>Subject</dt>
          <dd>{subject}</dd>
        </dl>
        <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    );
  }
}

class EmailListItem extends Component {
  render() {
    const { on_click, subject, from, to } = this.props;
    return (
      <tr onClick={() => on_click()}>
        <td>{subject}</td>
        <td>{from}</td>
        <td>{to}</td>
      </tr>
    );
  }
}

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

class NoneSelected extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className="none-selected alert alert-warning" role="alert">
        <span>No {text} selected.</span>
      </div>
    );
  }
}

class Mailbox extends Component {
  constructor(props) {
    super(props);
    this.state = { email_id: "admin" };
    this.handleSelectEmail = this.handleSelectEmail.bind(this);
  }

  handleSelectEmail(id) {
    this.setState({ email_id: "admin" });
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

class MailApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mailbox_id: props.mailboxes[0].id,
    };
  }

  handleSelectMailbox = (id) => {
    this.setState({ mailbox_id: id });
  };

  render() {
    const { mailboxes } = this.props;
    const { mailbox_id } = this.state;

    let selected_mailbox;
    if (mailbox_id !== null) {
      const mailbox = mailboxes.find((mailbox) => mailbox.id === mailbox_id);
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

const admin = [
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
        body:
          "<h1>Intro to React</h1> <img src='https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png' width=300/>",
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
];

export { MailApp, admin };

