import react, { useState, useEffect } from "react";
import GoogleAuth from "./Authentication/GoogleAuth";
import ReceiveQuery from "./ReceiveQuery/ReceiveQuery";
import CreatePlaylist from "./CreateCollection/CreatePlaylist";
import CloneAlbums from "./CloneCollection/CloneAlbums";

function YouTube({ filteredAlbums }) {
  const [accessToken, setAccessToken] = useState("");
  const [albumDetails, setAlbumDetails] = useState([]);
  const [youTubeAlbums, setYouTubeAlbums] = useState(() => {
    const localData = localStorage.getItem("youTubealbums");
    return localData ? JSON.parse(localData) : [];
  });

  const receiveToken = (token) => {
    setAccessToken(token);
  };

  console.log(albumDetails);
  return (
    <div>
      <h1>YouTube</h1>
      <GoogleAuth receiveToken={receiveToken} />
      <ReceiveQuery {...{ filteredAlbums, albumDetails, setAlbumDetails }} />
      <CreatePlaylist {...{ albumDetails, setAlbumDetails, accessToken }} />
    </div>
  );
}

export default YouTube;
