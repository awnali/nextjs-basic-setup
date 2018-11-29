import React from "react";
import Link1 from "next/link";
import { Link } from "../routes";

export const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" scroll={false}>
              <a>Welcome</a>
            </Link>
          </li>
          <li>
            <Link1 prefetch href="/Todos">
              <a>Home</a>
            </Link1>
          </li>

          <li>
            <Link1 prefetch href="/posts">
              <a>posts</a>
            </Link1>
          </li>
          <li>
            <Link1 prefetch href="/user/2">
              <a>user</a>
            </Link1>
          </li>
          <li>
            <Link1 prefetch href="/about">
              <a>About</a>
            </Link1>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
