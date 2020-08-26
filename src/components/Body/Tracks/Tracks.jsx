import React, { useEffect } from "react";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Track from "./track/track";
import { useDataLayer } from "../../../usefull/DataLayer";
import { spotify } from "../../../App";
import "./Tracks.css";

function Tracks(props) {
  const [
    { user, current_playlist, current_playlist_tracks, current_song },
    dispatch,
  ] = useDataLayer();

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        var _tracks = await spotify.getPlaylistTracks(current_playlist.id);
        dispatch({ type: "SET_TRACKS", tracks: _tracks });
      }
    };
    fetchData();
  }, [current_playlist]);

  return (
    <div className="tracks">
      <div className="tracks__top">
        <PlayCircleFilledWhiteIcon className="tracks__top__player" />
        <FavoriteIcon fontSize="large" className="traks__top__heart" />
        <MoreHorizIcon className="traks__top__dots" />
      </div>
      <div className="track_list">
        {current_playlist_tracks.items.map((item, index) => (
          <Track
            index={index}
            name={item.track.name}
            artists={item.track.artists}
            duration={item.track.duration_ms}
            album={item.track.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Tracks;
