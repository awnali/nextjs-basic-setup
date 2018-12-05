import React from "react";
import fetch from "isomorphic-fetch";
import Head from "next/head";
export default class extends React.Component {
  static async getInitialProps({ req, jsonPageRes }) {
    const res = await fetch("http://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    return { data: json, res: jsonPageRes };
  }

  render() {
    return (
      <div>
        <Head>
          <title>This is welcome page</title>
        </Head>
        <h2>Posts</h2>
        <pre>{JSON.stringify(this.props.data, null, 2)}</pre>
      </div>
    );
  }
}
