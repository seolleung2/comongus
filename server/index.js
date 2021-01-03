const express = require("express");
const app = express();
const http = require("http");
const socketio = require("socket.io");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users.js");

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

    const { error, user } = addUser({ id: socket.id, name, room }); // users.js 에서 함수가 리턴하는 것을 눈여겨 볼것!

    if (error) return callback(error);
    // !emitted event 는 백엔드에서 프론트엔드로 넘겨주기 위한 방식 이구나!
    socket.emit("message", {
      user: "admin",
      text: `${user.name}, Welcome to the room ${user.room}.`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name}, has joined!` });

    socket.join(user.room);

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });
  // ! on event 는 백엔드에서의 이벤트
  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });
    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });
  socket.on("disconnect", () => {
    // console.log("user disconnected!!😢");
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has left.`,
      });
    }
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`Server HAS Started on port ${PORT}`);
});
