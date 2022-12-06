const router = require("express").Router();
const userRoutes = require("./api/user-routes");
const thoughtRoutes = require("./api/thought-route");

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;
