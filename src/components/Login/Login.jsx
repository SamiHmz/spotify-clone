import React, { useEffect } from "react";
import "./Login.css";
import { loginUrl, getTokenFromResponse } from "../../usefull/spotify";
import Logo from "../Logo/Logo";

function Login(props) {
  //   useEffect(() => {
  //     // geting the token and storing it in the local storage
  //     const token = getTokenFromResponse();
  //     localStorage.setItem("token", token.access_token);
  //     window.location.hash = "";
  //   }, []);

  return (
    <div className="container">
      <div className="Nav">
        <Logo />
        <ul>
          <li>Premium</li>
          <li>Help</li>
          <li>Download</li>
          <li>|</li>
          <li>Sign up</li>
          <li>
            <a href={loginUrl}> Log In</a>
          </li>
        </ul>
      </div>
      <h1>Music for everyone.</h1>
      <h4>Millions of songs. No credit card needed.</h4>
      <a href={loginUrl} className="btn">
        LOG IN
      </a>
    </div>
  );
}

export default Login;
