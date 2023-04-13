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
        <div
          className="body"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    );
  }
}

export default Email;
