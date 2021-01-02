const express = require("express");
const app = express();
const http = require("http");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server Starts on ${PORT}`);
});
