import React from "react";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import { useDataLayer } from "../../../../usefull/DataLayer";
import "./track.css";

function Track({ name, artists, duration, album, index }) {
  const reducer = (accumulator, currentValue, currentIndex) => {
    return currentIndex === 0
      ? `${currentValue.name}`
      : `${accumulator} ,${currentValue.name}`;
  };

  const [{}, dispatch] = useDataLayer();

  const getMunites = (ms) => {
    var d = new Date(ms);
    return d.getUTCMinutes() + ":" + d.getUTCSeconds();
  };

  const handleChangeSong = (index) => {
    dispatch({ type: "SET_CURRENT_SONG", index });
  };

  return (
    <div className="track" onDoubleClick={() => handleChangeSong(index)}>
      <div className="track__left">
        <MusicNoteIcon className="track__left__note" />
        <div className="track__left__info">
          <h4>{name}</h4>
          <h5>
            {artists.reduce(reducer, "")}
            &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;{`${album}`}
          </h5>
        </div>
      </div>
      <h5>{getMunites(duration)}</h5>
    </div>
  );
}

export default Track;
