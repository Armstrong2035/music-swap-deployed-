import react, { useState, useEffect } from "react";
import GoogleAuth from "./Authentication/GoogleAuth";
import ReceiveQuery from "./ReceiveQuery/ReceiveQuery";
import CreatePlaylist from "./CreateCollection/CreatePlaylist";
import SearchSongs from "./SearchSongs/SearchSongs";

function YouTube({ albumsToClone }) {
  const [accessToken, setAccessToken] = useState(null);

  const [albumDetails, setAlbumDetails] = useState([]);

  const [youTubeAlbums, setYouTubeAlbums] = useState(() => {
    const localData = localStorage.getItem("youTubealbums");
    return localData ? JSON.parse(localData) : [];
  });

  const receiveAccessToken = (token) => {
    setAccessToken(token);
  };

  console.log(accessToken);
  console.log(albumDetails);
  return (
    <div>
      <h1>YouTube</h1>
      <GoogleAuth receiveAccessToken={receiveAccessToken} />
      <ReceiveQuery {...{ albumsToClone, albumDetails, setAlbumDetails }} />
      <CreatePlaylist {...{ albumDetails }} />
    </div>
  );
}

export default YouTube;
