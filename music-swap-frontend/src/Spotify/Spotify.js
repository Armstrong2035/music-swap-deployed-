import React, { useState } from "react";
import SpotifyAuthentication from "./Authentication/SpotifyAuthentication";
import ExtractAlbums from "./ExtractCollection/ExtractAlbums";
import GoogleAuth from "../YouTube/Authentication/YouTubeAuthentication";

function Spotify() {
  const [accessToken, setAccessToken] = useState(null);
  const [username, setUsername] = useState("");

  const receiveAccessToken = (token) => {
    setAccessToken(token);
  };

  return (
    <>
      <SpotifyAuthentication receiveAccessToken={receiveAccessToken} />
      <ExtractAlbums />
    </>
  );
}

export default Spotify;
