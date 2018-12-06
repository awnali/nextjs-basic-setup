import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const TodosList =
  process.env.NODE_ENV === "test"
    ? require("../components/TodosList").default
    : dynamic({
        loader: () => import("../components/TodosList"),
        loading: () => <p>loading ...</p>,
        ssr: true
      });

class Home extends React.Component {
  state = { show: false };
  static async getInitialProps({ req, query }) {
    // params/query will come from blog/:id path otherwise it will be  empty
    // console.log(req.params);
    console.log(process.env.APP_ENV);
    return {};
  }
  componentDidMount() {
    setTimeout(() => this.setState({ show: true }), 1000);
  }
  render() {
    return (
      <div>
        <Head>
          <title>This is home page</title>
        </Head>
        {this.state.show && <TodosList />}
      </div>
    );
  }
}

export default Home;
