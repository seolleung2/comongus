const express = require("express");
const app = express();
const http = require("http");
const socketio = require("socket.io");

const PORT = 5000;

const router = require("./router");

const server = http.createServer(app);

const io = socketio(server);

io.on("connection", (socket) => {
  console.log("a user connected!!🐼");
  socket.on("disconnect", () => {
    console.log("user disconnected!!😢");
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`Server HAS Started on port ${PORT}`);
});
