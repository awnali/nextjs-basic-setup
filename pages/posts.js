import React from "react";
import fetch from "isomorphic-fetch";
import Head from "next/head";
export default class extends React.Component {
  static async getInitialProps({ req, jsonPageRes }) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    return { posts: json, res: jsonPageRes };
  }

  render() {
    return (
      <div>
        <Head>
          <title>This is post page</title>
        </Head>
        <h2>Posts with ssr</h2>
        <ul>
          {this.props.posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
      </div>
    );
  }
}
