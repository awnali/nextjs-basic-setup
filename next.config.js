const getRoutes = require("./routes");
module.exports = {
  exportPathMap: getRoutes,
  useFileSystemPublicRoutes: true
};
