import React, { Component } from "react";
import Navbar from "./componets/Navbar";
import Main from "./componets/Main";
export default class root extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
      </div>
    );
  }
}
