import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import MenuItem from "../SideBare/MenuItem/MenuItem";
import AddIcon from "@material-ui/icons/Add";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Playlist from "./Playlist/Playlist";
import "./SideBare.css";
function SideBare(props) {
  return (
    <div className="sideBare">
      <img
        className="logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="no-img"
      />
      <div className="sideBare__menu">
        <MenuItem Icon={HomeIcon} text="Home" />
        <MenuItem Icon={SearchIcon} text="Search" />
        <MenuItem Icon={LibraryMusicIcon} text="Your Library" />
      </div>
      <h1>PLAYLISTS</h1>
      <div className="sideBare___playListMenu">
        <MenuItem Icon={AddIcon} text="Create Playlist" style="add-button" />
        <MenuItem Icon={FavoriteIcon} text="Liked Songs" style="heart" />
      </div>
      <hr />
      <Playlist />
    </div>
  );
}

export default SideBare;
