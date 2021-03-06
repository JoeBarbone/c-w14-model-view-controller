const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const dashboardRoutes = require("./dashboard-routes.js");
const editRoutes = require("./edit-post-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/edit-post", editRoutes);



router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
