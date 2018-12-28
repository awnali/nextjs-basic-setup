const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());
routes.add("about");
routes.add("home");
routes.add("posts", "posts");
routes.add("user", "/user/:id");
routes.add("blog", "/blog/:id");
routes.add("index", "/");
routes.add("register/basic-info", "/register/profile");
