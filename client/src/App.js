import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";

function App() {
  return (
    <>
      <div className="app__title">COMONG US</div>
      <Route path="/" component={Home} exact={true} />
      <Route path="/profile" component={Profile} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
    </>
  );
}

export default App;
