import React from "react";
import fetch from "isomorphic-fetch";

export default class extends React.Component {
  state = {};
  async componentDidMount() {
    const res = await fetch("http://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    this.setState({ data: JSON.stringify(json) });
  }

  render() {
    return (
      <div>
        {this.state.data && <pre>{JSON.stringify(this.state.data)}</pre>}
      </div>
    );
  }
}
