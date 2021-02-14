import React, { Component } from "react";

import axios from "axios";

import { API_URL } from "../constants";

class Chirps extends Component {
  state = {
    chirps: []
  };

  componentDidMount() {
    this.resetState();
  }

  getChirps = () => {
    axios.get(API_URL).then(res => this.setState({ chirps: res.data }));
  };

  resetState = () => {
    this.getChirps();
  };

  render() {
    return (
      <div>
          <ul>
          { this.state.chirps.map((chirp) => (
                <li key={chirp.id}>{chirp.id} -- {chirp.text}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Chirps;
