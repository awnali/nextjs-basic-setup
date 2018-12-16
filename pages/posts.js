import React from "react";
import fetch from "isomorphic-fetch";
import Head from "next/head";
import { connect } from "react-redux";
class Post extends React.Component {
  static async getInitialProps({ req, jsonPageRes, reduxStore }) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    console.log("INSIDE INIT", json);
    return { posts: json, name: "awn" };
  }
  constructor(props) {
    super();
    console.log("INSIDE CONSTRUCTOR");
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
const mapStateToProps = state => {
  return {
    postsFromRedux: state.posts
  };
};
export default connect(mapStateToProps)(Post);
