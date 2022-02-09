import React, { Component } from 'react';
import './Button.css'

class Button extends Component {
    state = {}
  render() {
    return (
        <div>
        <button onClick={this.props.handleClick} className="button">Pick Student</button>
        </div>
    )
  }
}

export default Button