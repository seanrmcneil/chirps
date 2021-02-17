import React, { Component, Fragment } from "react";
import Chirps from "./components/Chirps";
import NewChirpForm from "./components/NewChirpForm";
import axios from "axios";

import { API_URL } from "./constants";

class App extends Component {
  state = {
    chirps: []
  };

  componentDidMount() {
    this.refreshChirps();
  }

  getChirps = () => {
    axios.get(API_URL).then(res => this.setState({ chirps: res.data }));
  };

  refreshChirps = () => {
    this.getChirps();
  };

  render() {
    return (
    <Fragment>
      <h1>Chirps</h1>
      <Chirps chirps={this.state.chirps}>
      </Chirps>
      <NewChirpForm  refreshChirps={this.refreshChirps}></NewChirpForm>
    </Fragment>
  );
  }
}

export default App;
