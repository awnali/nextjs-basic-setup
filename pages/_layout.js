import React from "react";
import Link from "next/link";
import { Link1 } from "../routes";

export const Layout = props => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Welcome</a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/home/23">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/about" scroll={false}>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/test" scroll={false}>
              <a>test</a>
            </Link>
          </li>
        </ul>
      </nav>
      {props.children}
    </div>
  );
};

export default Layout;
