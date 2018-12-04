// server.js
const next = require("next");
const routes = require("./routes"); // <- your routes file
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);

// With express
const express = require("express");
app.prepare().then(() => {
  express()
    .use(handler) // <- this line is important
    .listen(3000);
});
