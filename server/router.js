const express = require("express");
const router = express.Router();

const controller = require("./controllers");

router.get("/", (req, res) => {
  res.send("Server is running.");
});

router.get("/messages", controller.messages.get);

router.post("/messages", controller.messages.post);

router.get("/todolist", controller.todolist.get);

router.post("/todolist", controller.todolist.post);

module.exports = router;
