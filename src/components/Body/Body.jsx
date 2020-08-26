import React, { useEffect } from "react";
import Header from "./Header/Header";
import Tracks from "./Tracks/Tracks";
import "./Body.css";
import { useDataLayer } from "../../usefull/DataLayer";
import { spotify } from "../../App";

function Body(props) {
  // const [
  //   { user, current_playlist, current_playlist_tracks },
  //   dispatch,
  // ] = useDataLayer();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (user) {
  //       var _tracks = await spotify.getPlaylistTracks(current_playlist.id);
  //       dispatch({ type: "SET_TRACKS", tracks: _tracks });
  //     }
  //   };
  //   fetchData();
  // }, [current_playlist]);
  // console.log(current_playlist);

  return (
    <div className="body scroll">
      <Header />
      <Tracks />
    </div>
  );
}

export default Body;
