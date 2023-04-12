import React from 'react'; 

var EmailListItem = React.createClass({
    render: function () {
      return (
        <tr onClick={this.props.on_click.bind(null)}>
          <td>{this.props.subject}</td>
          <td>{this.props.from}</td>
          <td>{this.props.to}</td>
        </tr>
      )
    },
  })
  export default EmailListItem;