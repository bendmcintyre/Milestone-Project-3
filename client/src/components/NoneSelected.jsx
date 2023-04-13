import React, { Component } from 'react';

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

export default NoneSelected;
