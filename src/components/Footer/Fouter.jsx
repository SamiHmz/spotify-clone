import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import RepeatIcon from "@material-ui/icons/Repeat";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import Slider from "@material-ui/core/Slider";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { useDataLayer } from "../../usefull/DataLayer";

import "./Footer.css";
import { useEffect } from "react";
function Fouter(props) {
  const reducer = (accumulator, currentValue, currentIndex) => {
    return currentIndex === 0
      ? `${currentValue.name}`
      : `${accumulator} ,${currentValue.name}`;
  };
  const muiTheme = createMuiTheme({
    overrides: {
      MuiSlider: {
        root: { width: "30%" },

        thumb: {
          color: "white",
          opacity: "0.6",
        },
        track: {
          color: "white",
          opacity: "0.6",
        },
        rail: {
          color: "white",
          opacity: "0.6",
        },
      },
    },
  });

  const [{ current_song }, dispatch] = useDataLayer();

  return (
    <div className="footer">
      <div className="footer__left">
        <img src={current_song.img} alt="" />
        <div className="footer__left_info">
          <h4>{current_song.name}</h4>
          <h5>{current_song.artists.reduce(reducer, "")}</h5>
        </div>
        <FavoriteBorderIcon className="footer__left_heart" />
      </div>
      <div className="footer__center">
        <div className="footer_center__icons">
          <ShuffleIcon className="icon" />
          <SkipPreviousIcon className="icon" />
          <PlayCircleOutlineIcon className="icon" />
          <SkipNextIcon className="icon" />
          <RepeatIcon className="icon" />
        </div>
        <div></div>
      </div>
      <div className="footer__right">
        <PlaylistPlayIcon className="icons" />
        <ImportantDevicesIcon className="icons" />
        <VolumeUpIcon className="icons" />
        <ThemeProvider theme={muiTheme}>
          <Slider min={18} max={90} defaultValue={40} />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Fouter;
