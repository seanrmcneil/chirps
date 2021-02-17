import React, { Component, Fragment } from "react";
import Chirps from "./components/Chirps";

class App extends Component {
  render() {
    return (
    <Fragment>
      <h1>Chirps</h1>
      <Chirps></Chirps>
    </Fragment>
  );
  }
}

export default App;
