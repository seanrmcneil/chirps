import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewChirpForm extends React.Component {
  state = {
    pk: 0,
    text: ""
  };

  componentDidMount() {
    if (this.props.chirps) {
      const { pk, text } = this.props.chirps;
      this.setState({ pk, text});
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createChirp = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.refreshChirps();
    });
  };

  render() {
    return (
      <Form onSubmit={this.createChirp}>
        <FormGroup>
          <Label for="text">Text:</Label>
          <Input
            type="text"
            name="text"
            onChange={this.onChange}
            value={this.state.text}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewChirpForm;