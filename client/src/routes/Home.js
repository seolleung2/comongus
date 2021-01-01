import React, { Component } from "react";
import AppLayout from "../../src/components/AppLayout";
import ChatterBox from "../components/ChatterBox";
import "./Home.css";

import { Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      chatsList: [],
      comment: "",
      roomList: [],
      currentRoom: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearMessages = this.clearMessages.bind(this);
    this.handleChangeRoom = this.handleChangeRoom.bind(this);
  }

  componentDidMount() {
    // this.getData(); // 1. 기존 방법
    // window.setTimeout(window.location.reload(), 60000) // 2. window 창 자체를 새로고침 (매우 무식스)
    setInterval(() => {
      this.getData(); // 3. 위에 this.getData = this.getData.bind(this) 를 안적어서 이래 표기하니 되었다.
    }, 1000);
  }
  handleChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      this.handleSubmit(event);
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const serverURL = "http://localhost:4000/messages";
    let message = {
      username: "🐧FengSu",
      text: this.state.comment,
      roomname: this.state.currentRoom,
      date: new Date().toLocaleString(),
    };
    window
      .fetch(serverURL, {
        method: "POST",
        body: JSON.stringify(message),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        // event.target.value = "";
        document.querySelector("#comment").value = "";
        let inputRoom = document.querySelector("#typeRoomName");
        document.querySelector("#typeRoomName").value = "";
        inputRoom.style.display = "none";
        this.setState({ currentRoom: "" });

        document.querySelector("#roomName").value = "none";
      });
    // .then(() => setInterval(this.componentDidMount(), 1000));
  };

  clearMessages = () => {
    this.setState({
      chatsList: [],
    });
  };

  handleChangeRoom = (event) => {
    // console.log(event.target.value);
    let inputRoom = document.querySelector("#typeRoomName");
    let selectRoom = document.querySelector("#roomName");
    if (event.target.value === "typeRoomName") {
      inputRoom.style.display = "block";
    } else {
      this.setState({ currentRoom: event.target.value });
    }
    if (selectRoom.value !== "typeRoomName") {
      inputRoom.style.display = "none";
    }
  };

  getData = () => {
    fetch("http://localhost:4000/messages")
      .then((res) => res.json())
      .then((res) => {
        for (let i = 0; i < res.results.length; i++) {
          if (this.state.roomList.indexOf(res.results[i].roomname) === -1) {
            this.setState({
              roomList: [...this.state.roomList, res.results[i].roomname],
            });
          }
        }
        // console.log(this.state.roomList);
        this.setState({
          chatsList: res.results.reverse(),
        });
      });
  };
  render() {
    const { chatsList, roomList } = this.state;
    return (
      <AppLayout>
        <div className="chats__list">
          <div className="main">
            <h1>Comment Below🐼</h1>
            <div className="goToRealChat">
              <div>For Real-Time CHAT ⏩</div>
              <Link to="/" className="clickMe">
                Click Me
              </Link>
            </div>
            <div className="input-group">
              <div className="select-input">
                <label htmlFor="text">Room Type ⏩</label>
                <select
                  name="roomName"
                  id="roomName"
                  onChange={this.handleChangeRoom}
                >
                  <option value="none">===Select Room===</option>
                  <option value="typeRoomName">Type RoomName ⏩</option>

                  {roomList.map((room, idx) => {
                    return (
                      <option key={idx} value={room}>
                        {room}
                      </option>
                    );
                  })}
                </select>
                <input
                  type="text"
                  id="typeRoomName"
                  style={{ display: "none" }}
                  onChange={this.handleChangeRoom}
                  placeholder="Input Your Roomname"
                />
              </div>
              <div className="textarea-btn">
                <textarea
                  id="comment"
                  onChange={this.handleChange}
                  name="comment"
                  rows="2"
                  cols="33"
                  onKeyDown={this.handleKeyDown}
                  placeholder="Your Comment"
                ></textarea>
                <button id="submit" onClick={this.handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="chats">
            {chatsList.map((chat, idx) => {
              return (
                <ChatterBox
                  key={idx}
                  username={chat.username}
                  roomname={chat.roomname}
                  date={chat.date}
                  text={chat.text}
                />
              );
            })}
          </div>
        </div>
      </AppLayout>
    );
  }
}

export default Home;
