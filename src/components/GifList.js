import React, { Component } from "react";

export default class GifList extends Component {
  render() {
    console.log(this.props.gifs.data)
    return (
      <div>
        <h3>GifList loaded</h3>
        <ul>
          <li>
            {this.props.gifs.data.length === 0 ? null : <img src={this.props.gifs.data[0].images.original.url} alt=""/>}
          </li>
          <li>
            {this.props.gifs.data.length === 0 ? null : <img src={this.props.gifs.data[1].images.original.url} alt=""/>}
          </li>
          <li>
            {this.props.gifs.data.length === 0 ? null : <img src={this.props.gifs.data[2].images.original.url} alt=""/>}
          </li>
        </ul>
      </div>
    );
  }
}
GifList.defaultProps = {
  gifs: {data:[]}
}
