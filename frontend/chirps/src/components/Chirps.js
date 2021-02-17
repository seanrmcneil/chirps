import React, { Component } from "react";
import './Chirps.css';

class Chirps extends Component {

  render() {
    const chirps = this.props.chirps;
    return (
      <div>
          <ul className="chirps">
          { chirps.map((chirp) => (
                <li key={chirp.id}>{chirp.id} -- {chirp.text}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Chirps;
