import React, { Component } from "react";
import "./styles/app.css";
import fruit from "./Fruit";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Fruit Factory !</h1>
        <ul>
          {fruit.map((fr) => (
            <li>{fr}</li>
          ))}
        </ul>
      </div>
    );
  }
}
