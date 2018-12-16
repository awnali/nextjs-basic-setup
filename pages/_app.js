import React from "react";
import App, { Container } from "next/app";
import Link from "next/link";
import { Provider } from "react-redux";
import Layout from "./_layout";
import Router from "next/router";
import withReduxStore from "../lib/with-redux-store";
class MyApp extends App {
  handleRouteChange = url => {
    console.log("App is changing to: ", url);
  };

  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/static/sw.js")
        .then(() => console.log("service worker registered."))
        .catch(err => console.dir(err));
    }
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
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
