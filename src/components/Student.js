import React, { Component } from 'react'

class Student extends Component {
   state = {}
  render() {
    return (
      <div>
      <div className="name">{this.props.student && this.props.student.name}</div>
      <img src={this.props.student && this.props.student.img}  />
      </div>
    )
  }
}

export default Student