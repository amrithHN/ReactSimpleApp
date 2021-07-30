import React, { Component } from "react";

export class Machine extends Component {
  render() {
    let items = this.props;
    let winner =
      items.s1 === items.s2 ? (items.s2 === items.s3 ? true : false) : false;
    return (
      <div>
        <p>
          {items.s1} {items.s2} {items.s3}
        </p>
        <p>{winner ? "You win" : "You suck !!!"}</p>
      </div>
    );
  }
}

export default Machine;
