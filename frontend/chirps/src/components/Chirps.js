import React, { Component } from "react";
import Chirp from "./Chirp";
import './Chirps.css';

class Chirps extends Component {

  render() {
    const chirps = this.props.chirps;
    return (
      <div>
          <ul className="chirps">
          { chirps.map((chirp) => (
            <Chirp refreshChirps={this.props.refreshChirps} key={chirp.id} chirp={chirp}></Chirp>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Chirps;
