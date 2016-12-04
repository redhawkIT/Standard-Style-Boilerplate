// jshint ignore: start
import React from 'react'

class Bio extends React.Component {
  render () {
    return (
      <div>
        <p>
          <img src={this.props.img} alt={this.props.imgAlt} />
          <br />
          Hey, let's talk about me.
          My name is {this.props.name} and I am {this.props.age}.
        </p>
      </div>
    )
  }
}

export default Bio
