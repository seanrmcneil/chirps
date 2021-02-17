import axios from "axios";
import React, { Component } from "react";

import { API_URL } from "../constants";

class Chirp extends Component {
  state = {
    id: 0,
    text: "",
    upvotes: 0
  };

  componentDidMount() {
    if (this.props.chirp) {
      const { id, text, upvotes } = this.props.chirp;
      this.setState({ id, text, upvotes});
    }
  }

  onClick = () => {
    this.upVoteChirp()
  }

  upVoteChirp = () => {
      const payload = {
          upvotes: 1,
      };
      const url = API_URL+this.state.id+"/";
      axios.patch(url, payload).then((res) => {
          this.props.refreshChirps();
      })
  }

  render() {
    const chirp = this.props.chirp;
    return (
      <div>
            {this.state.id} -- {this.state.text}. Up Votes: {this.state.upvotes}
            <a onClick={this.onClick}>Up Vote</a>
      </div>
    );
  }
}

export default Chirp;
