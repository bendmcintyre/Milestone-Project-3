import React, { Component } from 'react';

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

export default EmailListItem;
