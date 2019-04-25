var express = require("express");
var router = express.Router();
var controller = require("../controllers/trainerController");

router.get("/", controller.getAll);
router.post("/", controller.createTrainer);
router.get("/:id", controller.getOne);
router.put("/:id", controller.updateTrainer);
router.delete("/:id", controller.deleteTrainer);

module.exports = router;
