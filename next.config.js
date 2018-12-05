const webpack = require("webpack");
const withCSS = require("@zeit/next-css");
require("dotenv").config({
  path: process.env.NODE_ENV === "production" ? ".env.production" : ".env"
});

module.exports = withCSS({
  distDir: "build",
  webpack: config => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));

    return config;
  }
});
