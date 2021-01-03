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
  // ! client side 에서 emit 으로 보낸 이벤트 'join' 을 받아오겠다.
  // socket.on("join", (data) => {
  //   console.log(data); // 오 지져스.. { name: 'hello', room: 'world' } 가 CLI 에 찍힌다.
  // });
  socket.on("join", ({ name, room }, callback) => {
    console.log(name, room);

    // const error = true;

    // if (error) {
    //   callback({ error: "error" });
    // }
  });
  socket.on("disconnect", () => {
    console.log("user disconnected!!😢");
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`Server HAS Started on port ${PORT}`);
});
