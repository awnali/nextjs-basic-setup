import React from "react";
import dynamic from "next/dynamic";
const TodosList = dynamic({
  loader: () => import("../components/TodosList"),
  loading: () => <p>loading ...</p>,
  ssr: true
});

class Home extends React.Component {
  static async getInitialProps({ req, jsonPageRes }) {
    return {};
  }
  render() {
    return (
      <div>
        <TodosList />
      </div>
    );
  }
}

export default Home;
