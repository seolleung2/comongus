import React, { useState } from "react";
import AppLayout from "../../src/components/AppLayout";
import LoginForm from "../components/LoginForm";
import UserProfile from "../components/UserProfile";
const Signin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <AppLayout>{isLoggedIn ? <UserProfile /> : <LoginForm />}</AppLayout>;
};

export default Signin;
