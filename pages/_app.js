import React from "react";
import App, { Container } from "next/app";
import Link from "next/link";
import Layout from "./_layout";
import Router from "next/router";

export default class MyApp extends App {
  handleRouteChange = url => {
    console.log("App is changing to: ", url);
  };
  componentDidMount() {
    Router.events.on("routeChangeStart", this.handleRouteChange);
    Router.events.on("routeChangeError", (err, url) => {
      if (err.cancelled) {
        console.log(`Route to ${url} was cancelled!`);
      }
    });
    Router.beforePopState(({ url, as, options }) => {
      // I only want to allow these two routes!
      alert("route changed");
      if (as !== "/" || as !== "/other") {
        // Have SSR render bad routes as a 404.
        window.location.href = as;
        return false;
      }

      return true;
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
