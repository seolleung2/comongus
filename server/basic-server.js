const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const port = 4000;

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

app.use(cors());

app.use(jsonParser);

app.get("/messages", (req, res) => {
  res.status(200).send(data);
});

app.post("/messages", (req, res) => {
  console.log(req.body);
  data.results.push(req.body);
  res.status(201).send(req.body);
});

app.listen(port, () => {
  console.log(`COMONGUS app listening at http://localhost:${port} 🐼`);
});
