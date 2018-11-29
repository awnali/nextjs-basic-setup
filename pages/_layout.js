import React from "react";
import Link1 from "next/link";
import { Link } from "../routes";

export const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link route="index" scroll={false}>
              <a>Welcome</a>
            </Link>
          </li>
          <li>
            <Link1 prefetch href="/home">
              <a>Home</a>
            </Link1>
          </li>

          <li>
            <Link1 prefetch href="/posts">
              <a>posts</a>
            </Link1>
          </li>
          <li>
            <Link route="user" params={{ id: 3 }}>
              <a>user</a>
            </Link>
          </li>
          <li>
            <Link prefetch route="about">
              <a>about</a>
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
