import React from "react";
import fetch from "isomorphic-fetch";

export const User = ({ user }) => <pre>{JSON.stringify(user, null, 2)}</pre>;
User.getInitialProps = async ({ req, query }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${query.id}`
  );
  const json = await res.json();
  return { user: json };
};

export default User;

// CLASS COMPONENT
// export default class extends React.Component {
//   static async getInitialProps({ req, query }) {
//     const res = await fetch(
//       `http://jsonplaceholder.typicode.com/users/${query.id}`
//     );
//     const json = await res.json();
//     return { user: json };
//   }

//   render() {
//     return <pre>{JSON.stringify(this.props.user, null, 2)}</pre>;
//   }
// }
