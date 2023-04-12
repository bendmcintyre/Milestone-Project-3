import React from 'react'; 

var Email = React.createClass({
    render: function () {
      return (
        <div className="email">
          <dl className="meta dl-horizontal">
            <dt>From</dt>
            <dd>{this.props.from}</dd>
  
            <dt>To</dt>
            <dd>{this.props.to}</dd>
  
            <dt>Subject</dt>
            <dd>{this.props.subject}</dd>
          </dl>
          <div
            className="body"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
        </div>
      )
    },
  })
  
  export default Email;