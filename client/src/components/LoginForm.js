import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return (
    <>
      <div className="login__contents">
        <div className="portrait"></div>

        <div className="login">
          <div className="hiddenPortrait"></div>
          <div className="userinfo">
            <label htmlFor="username-form">username</label>
            <input
              name="username"
              value={id}
              type="text"
              onChange={onChangeId}
              placeholder="Input your ID"
              style={{
                width: "200px",
                height: "40px",
              }}
              required
            />
          </div>
          <div className="userinfo">
            <label htmlFor="password">password</label>
            <input
              name="password"
              type="text"
              value={password}
              onChange={onChangePassword}
              placeholder="Input your PASSWORD"
              style={{
                width: "200px",
                height: "40px",
              }}
              required
            />
          </div>
          <button className="login__btn">LOGIN</button>
          <span style={{ fontSize: "20px", marginLeft: "30px" }}>
            Forgot password?
            <Link to="/" style={{ color: "white", marginLeft: "10px" }}>
              Click Here
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
