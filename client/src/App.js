import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import RealTimeChatJoin from "./components/RealTimeChatJoin/RealTimeChatJoin";
import RealTimeChat from "./components/RealTimeChat/RealTimeChat";
function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Home} exact={true} />
        <Route path="/profile" component={Profile} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/rtcjoin" component={RealTimeChatJoin} exact={true} />
        <Route path="/rtcjoin/chat" component={RealTimeChat} />
      </Router>
    </>
  );
}

export default App;
