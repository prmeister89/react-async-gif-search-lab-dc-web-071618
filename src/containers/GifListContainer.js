import React, { Component } from "react";

import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.value}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        gifs: data
      })
    })
  }

  render() {
    return (
      <div>
        <h3>GifListContainer loaded</h3>

        <GifSearch handleChange={this.handleChange} handleSubmit={this.handleSubmit} />

        {Object.keys(this.state).length > 0 ? (
          <GifList gifs={this.state.gifs} />
        ) : null}
      </div>
    );
  }
}
