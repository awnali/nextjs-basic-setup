import React from "react";
import fetch from "isomorphic-fetch";

export default class extends React.Component {
  state = {};
  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await res.json();
    this.setState({ data: json });
  }

  render() {
    return (
      <div>
        <h2>Todo's with cr</h2>
        {this.state.data && (
          <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
        )}
      </div>
    );
  }
}
