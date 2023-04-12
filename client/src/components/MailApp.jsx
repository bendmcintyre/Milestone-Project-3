import React from 'react'; 
import Mailbox from './Mailbox';
import MailboxList from './MailboxList';
import NoneSelected from './NoneSelected';
import Email from './Email';
import EmailList from './EmailList';
import EmailListItem from './EmailListItem';


var MailApp = React.createClass({
    getInitialState: function () {
      return { mailbox_id: null }
    },
  
    handleSelectMailbox: function (id) {
      this.setState({ mailbox_id: id })
    },
  
    render: function () {
      var mailbox_id = this.state.mailbox_id
      if (mailbox_id) {
        var mailbox = this.props.mailboxes.filter(function (mailbox) {
          return mailbox.id == mailbox_id
        })[0]
        selected_mailbox = <Mailbox key={mailbox.id} emails={mailbox.emails} />
      } else {
        selected_mailbox = <NoneSelected text="mailbox" />
      }
  
      return (
        <div className="app row">
          <MailboxList
            mailboxes={this.props.mailboxes}
            onSelectMailbox={this.handleSelectMailbox}
          />
          <div className="mailbox col-md-10">
            <div className="panel panel-default">
              <div className="panel-body">{selected_mailbox}</div>
            </div>
          </div>
        </div>
      )
    },
  })

  export default MailApp;

  