import React from "react";
import Head from "next/head";
import TodoListing from "../components/TodosList";
import dynamic from "next/dynamic";
const TodosList = dynamic({
  loader: () => import("../components/TodosList"),
  loading: () => <p>loading ...</p>,
  ssr: true
});

class Home extends React.Component {
  static async getInitialProps({ req, query }) {
    // params/query will come from blog/:id path otherwise it will be  empty
    // console.log(req.params);
    console.log(process.env.APP_ENV);
    return {};
  }
  render() {
    return (
      <div>
        <Head>
          <title>This is home page</title>
        </Head>
        <TodosList />
      </div>
    );
  }
}

export default Home;
