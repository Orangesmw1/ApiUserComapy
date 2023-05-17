const userController = require("../controllers/userController");

const router = require("express").Router();

// ADD User
router.post("/", userController.addUser);

// GET ALL USER
router.get("/", userController.getAllUser);

module.exports = router;
