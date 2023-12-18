const express = require("express");
const router = express.Router();
const heroController = require("../controllers/heroController");
const userJwt = require("../middlewares/userJwt");

// Define routes

router.post("/", userJwt, heroController.createHero);
router.get("/", heroController.getHero);
router.put("/:id", userJwt, heroController.updateHero);

module.exports = router;
