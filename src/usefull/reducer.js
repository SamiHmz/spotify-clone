import { act } from "react-dom/test-utils";

export const intialState = {
  user: null,
  playlists: [],
  current_playlist: { images: [{ url: "" }] },
  current_playlist_tracks: { items: [] },
  current_song: { img: "", name: "", artists: [] },
  playing: false,
  token: "",
};

const reducer = (state, action) => {
  console.log("action");

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN": {
      return {
        ...state,
        token: action.token,
      };
    }
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
        current_playlist: action.playlists[0],
      };
    case "SET_TRACKS": {
      return {
        ...state,
        current_playlist_tracks: action.tracks,
        current_song: {
          img: action.tracks.items[0].track.album.images[0].url,
          name: action.tracks.items[0].track.name,
          artists: action.tracks.items[0].track.artists,
        },
      };
    }
    case "SET_CURRENT_PLAYLIST": {
      return {
        ...state,
        current_playlist: action.playlist,
      };
    }
    case "SET_CURRENT_SONG": {
      return {
        ...state,
        current_song: {
          img:
            state.current_playlist_tracks.items[action.index].track.album
              .images[0].url,
          name: state.current_playlist_tracks.items[action.index].track.name,
          artists:
            state.current_playlist_tracks.items[action.index].track.artists,
        },
      };
    }
    case "LOG_OUT": {
      return {
        token: "",
      };
    }
    default:
      return state;
  }
};

export default reducer;
