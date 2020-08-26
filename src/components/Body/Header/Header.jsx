import React, { useState } from "react";
import { Avatar, classes } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import "./Header.css";
import { useDataLayer } from "../../../usefull/DataLayer";
function Header(props) {
  const [{ user, current_playlist }, dispatch] = useDataLayer();
  const [show, setShow] = useState("");

  const handleToggelLogout = () => {
    show === "" ? setShow("show") : setShow("");
  };
  const handleLogOut = () => {
    dispatch({ type: "LOG_OUT" });
  };
  return (
    <div className="header">
      <div className="header__top">
        <Avatar src={user?.images[0].url} alt="sami_pic" />
        <span>{user?.display_name}</span>
        <ArrowDropDownIcon onClick={handleToggelLogout} />
        <div className={`header__top_logOut ${show}`}>
          <h5>Acount</h5>
          <h5>Profile</h5>
          <hr />
          <h5 onClick={handleLogOut}>Logout</h5>
        </div>
      </div>
      <div className="header__bottom">
        <img src={current_playlist.images[0].url} />
        <div className="header__bottom_info">
          <h4>PLAYLIST</h4>
          <h1>{current_playlist.name}</h1>
          <h4>{user?.display_name}</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
