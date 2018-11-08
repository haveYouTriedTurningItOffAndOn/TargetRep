const router = require("express").Router();
const logController = require("../../controllers/logController");

// Matches with "/api/log"
router.route("/")
  .get(logController.findAll)
  .post(logController.create);

// Matches with "/api/log/:id"
router
  .route("/:id")
  .get(logController.findById)
  .put(logController.update)
  .delete(logController.remove);

module.exports = router;
