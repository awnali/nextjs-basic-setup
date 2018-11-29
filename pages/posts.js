import React from "react";
import fetch from "isomorphic-fetch";

export default class extends React.Component {
  static async getInitialProps({ req, jsonPageRes }) {
    const res = await fetch("http://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    return { posts: json, res: jsonPageRes };
  }

  render() {
    return (
      <div>
        <h2>Posts with ssr</h2>
        <ul>{this.props.posts.map(post => <li>{post.title}</li>)}</ul>
      </div>
    );
  }
}
