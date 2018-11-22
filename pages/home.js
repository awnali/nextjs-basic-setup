import React from "react";
import dynamic from "next/dynamic";
const HomeDetails = dynamic({
  loader: () => import("../components/HomeDetails"),
  loading: () => <p>loading ...</p>,
  ssr: false
});

class Home extends React.Component {
  state = { show: false };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 3000);
  }
  render() {
    return (
      <div>
        <HomeDetails />
      </div>
    );
  }
}

export default Home;
