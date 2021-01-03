import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./RealTimeChat.css";
import InfoBar from "../InfoBar/InfoBar";

let socket;

const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};

// ! 클라이언트의 io 요청의 두 번째 인자에 connectionOption 객체를 위의 형식으로 작성해 보낸다.
// https://stackoverflow.com/questions/44628363/socket-io-access-control-allow-origin-error/65188436#65188436
const RealTimeChat = ({ location }) => {
  // ! client 에서 콘솔로그 location 해바. window 의 location 객체가 뜬다. 이것을 props 로 받아왔다.

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "localhost:5000";
  useEffect(() => {
    // const data = queryString.parse(location.search); // ! queryString 문자열을(location.search) 자바스크립트 객체로 변환해줌!
    // console.log(location.search); // RealTimeChat.js:11 ?name=hello&room=world
    // console.log(typeof location.search); // string
    // console.log(data); // RealTimeChat.js:13 {name: "hello", room: "world"}

    socket = io(ENDPOINT, connectionOptions);

    const { name, room } = queryString.parse(location.search);
    // console.log(name, room); // hello world
    setName(name);
    setRoom(room);

    // console.log(socket);

    // 클라이언트가 서버로 이벤트를 전달 할때 쓰는 emit
    socket.emit("join", { name, room }, () => {}); // socket.emit("join", { name : name, room: room }); 이렇게 작성해도 됨, emit 의 두번째 인자는 backend 에 보내는 payload.

    return () => {
      socket.emit("disconnect"); // a return statement this is used for unmounting, disconnecting effects
      // ! 서버 사이드에서 연결을 끊을 때 이벤트 'disconnect' 를 고대로 실행시킨다.
      socket.off(); // turn this socket request off
    };
  }, [ENDPOINT, location.search]); // ! if present, effect will only activate if the values in the list change.

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  // function for sending messages
  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        {/* <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        /> */}
      </div>
    </div>
  );
};

export default RealTimeChat;
