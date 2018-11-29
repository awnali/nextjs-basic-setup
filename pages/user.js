import React from "react";
import fetch from "isomorphic-fetch";

export default class extends React.Component {
  static async getInitialProps({ req, jsonPageRes }) {
    const res = await fetch("http://jsonplaceholder.typicode.com/users/3");
    const json = await res.json();
    return { user: json };
  }

  render() {
    return <pre>{JSON.stringify(this.props.user, null, 2)}</pre>;
  }
}
