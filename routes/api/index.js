const router = require("express").Router();
const userRoutes = require("./user");
const logsRoutes = require("./logs");


// routes/api/index
// Book routes

router.use("/user", userRoutes);

router.use("/logs", logsRoutes);


module.exports = router;
