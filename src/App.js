import "./App.css";
import React, { useEffect } from "react";
import Login from "./components/Login/Login";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayer } from "./usefull/DataLayer";
import { getTokenFromResponse } from "./usefull/spotify";
import Home from "./components/Home/Home";

export const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayer();
  useEffect(() => {
    const fetchData = async () => {
      const token = getTokenFromResponse();
      if (token) {
        spotify.setAccessToken(token.access_token);
        const me = await spotify.getMe();
        dispatch({ type: "SET_USER", user: me });
        dispatch({ type: "SET_TOKEN", token: token.access_token });
      }
    };
    fetchData();
  }, []);

  return <div className="App">{token ? <Home /> : <Login />}</div>;
}

export default App;
