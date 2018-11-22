import React from "react";
import fetch from "isomorphic-fetch";

export default class extends React.Component {
  static async getInitialProps({ req, jsonPageRes }) {
    const res = await fetch("http://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    return { data: json, res: jsonPageRes };
  }

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props.data, null, 2)}</pre>
      </div>
    );
  }
}
