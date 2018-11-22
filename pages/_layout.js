import React from "react";
import Link from "next/link";

export const Layout = props => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link prefetch href="/">
              <a>Welcome</a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/home">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/about" scroll={false}>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
      {props.children}
    </div>
  );
};

export default Layout;
