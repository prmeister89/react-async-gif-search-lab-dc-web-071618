import React, { Component } from "react";

export default class GifSearch extends Component {

  render() {
    // console.log(this.props)
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" onChange={this.props.handleChange}/>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
