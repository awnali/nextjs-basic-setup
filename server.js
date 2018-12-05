const express = require("express");
const { parse } = require("url");
const next = require("next");
const routes = require("./routes");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = routes.getRequestHandler(app);
require("dotenv").config();

app.prepare().then(() => {
  const server = express();

  // custom url, which shouldn't be part of nextjs page routes
  server.get("/blog/:id", (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    return app.render(req, res, "/home", query);
  });

  // if not a custom url then it should be handled by nextjs middleware
  server.use(handler);

  server.listen(3000, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
