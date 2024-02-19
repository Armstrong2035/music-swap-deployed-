import React, { useState } from "react";
import SpotifyAuthentication from "./Authentication/SpotifyAuthentication";
import ExtractAlbums from "./ExtractCollection/ExtractAlbums";
import GoogleAuth from "../YouTube/Authentication/YouTubeAuthentication";
import ViewAlbums from "./ViewCollection/ViewAlbums";

function Spotify({ setAlbums, filteredAlbums }) {
  const [accessToken, setAccessToken] = useState(null);
  const [username, setUsername] = useState("");

  const receiveAccessToken = (token) => {
    setAccessToken(token);
  };

  return (
    <>
      <SpotifyAuthentication receiveAccessToken={receiveAccessToken} />
      <ExtractAlbums {...{ filteredAlbums, setAlbums }} />
      <ViewAlbums filteredAlbums={filteredAlbums} />
    </>
  );
}

export default Spotify;
