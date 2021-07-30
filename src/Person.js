import React, { Component } from "react";

export class Person extends Component {
  render() {
    let message = this.props;
    return (
      <div>
        <p>
          {" "}
          {message.from} sent a message to {message.to}{" "}
        </p>
      </div>
    );
  }
}

export default Person;
