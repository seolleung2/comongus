import React from "react";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import AndroidOutlinedIcon from "@material-ui/icons/AndroidOutlined";
import SportsEsportsOutlinedIcon from "@material-ui/icons/SportsEsportsOutlined";

import "./AppLayout.css";

const AppLayout = ({ children }) => {
  return (
    <>
      <div className="app__title">COMONG US</div>
      <div className="menu__contents">
        <div className="menu__content">{children}</div>
      </div>
      <div className="menu__items">
        <div className="main__profile">
          <div className="menu__item">
            <Link to="/" style={{ color: "#ff6341" }}>
              <HomeOutlinedIcon style={{ fontSize: "40px" }} />
              <span>MAIN</span>
            </Link>
          </div>
          <div className="menu__item">
            <Link to="/profile" style={{ color: "rgb(0, 255, 0)" }}>
              <FaceOutlinedIcon style={{ fontSize: "40px" }} />
              <span>Profile</span>
            </Link>
          </div>
        </div>
        <div className="signup__signin">
          <div className="menu__item">
            <Link to="/signup" style={{ color: "rgb(0, 255, 250)" }}>
              <AndroidOutlinedIcon style={{ fontSize: "40px" }} />
              <span>SignUp</span>
            </Link>
          </div>
          <div className="menu__item">
            <Link to="/signin" style={{ color: "rgb(250, 255, 0)" }}>
              <SportsEsportsOutlinedIcon style={{ fontSize: "40px" }} />
              <span>SignIn</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
