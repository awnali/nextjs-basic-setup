const routes = require("next-routes");

module.exports = routes()
  .add("about")
  .add("home")
  .add("posts", "posts")
  .add("user", "/user/:id")
  .add("blog", "/blog/:id")
  .add("index", "/");
