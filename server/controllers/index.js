const models = require("../models");

let data = {
  results: [
    {
      username: "FengSU🐧",
      text: "ComongUS with Express.js🌈",
      roomname: "MyROOM🖐🏼",
      date: new Date().toLocaleString(),
    },
  ],
};

module.exports = {
  messages: {
    get: function (req, res) {
      res.status(200).send(data);
    },
    post: function (req, res) {
      console.log(req.body);
      data.results.push(req.body);
      res.status(201).send(req.body);
    },
  },
  todolist: {
    get: function (req, res) {},
    post: function (req, res) {},
  },
};
