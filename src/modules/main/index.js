import React, { Component } from "react";
import MainComponent from "./mainComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <MainComponent />
      </>
    );
  }
}

export default Main;
