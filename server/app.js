const express = require("express");
const db = require("./db");

// Middleware
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

// Router
const router = require("./router.js");
const app = express();
module.exports.app = app;

// ? Set What we are listening on.
app.set("port", 4000);

app.use(cors());

// Logging and parsing
// app.use(morgan("dev")); // ! 아니 얘를 활성화시키면 계속 GET /messages 304 log 가 nodemon 에 뜬다.
app.use(jsonParser);

// ? Set up our routes
app.use("/", router);

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("COMONGUS Server Listening on", app.get("port"));
}

// app.listen(port, () => {
//   console.log(`COMONGUS app listening at http://localhost:${port} 🐼`);
// });
