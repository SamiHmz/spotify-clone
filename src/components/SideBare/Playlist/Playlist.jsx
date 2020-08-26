import React, { useEffect } from "react";

import { useDataLayer } from "../../../usefull/DataLayer";
import { spotify } from "../../../App";
import "./Playlist.css";

function Playlist(props) {
  const [{ playlists, user, current_playlist_id }, dispatch] = useDataLayer();

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        var _playlists = await spotify.getUserPlaylists(user.id);
        dispatch({ type: "SET_PLAYLIST", playlists: _playlists.items });
      }
    };
    fetchData();
  }, [user]);

  const handleChangePlaylist = (id) => {
    const index = playlists.findIndex((item) => item.id === id);
    dispatch({ type: "SET_CURRENT_PLAYLIST", playlist: playlists[index] });
  };

  return (
    <div className="playlists scroll">
      {playlists.map((item) => (
        <h4 key={item.id} onClick={() => handleChangePlaylist(item.id)}>
          {item.name}
        </h4>
      ))}
    </div>
  );
}

export default Playlist;
