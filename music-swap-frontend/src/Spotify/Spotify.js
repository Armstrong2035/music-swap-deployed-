import React, { useState } from "react";
import SpotifyAuthentication from "./Authentication/SpotifyAuthentication";
import ExtractAlbums from "./ExtractCollection/ExtractAlbums";
import GoogleAuth from "../YouTube/Authentication/GoogleAuth";
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
      <ExtractAlbums {...{ accessToken, filteredAlbums, setAlbums }} />
      <ViewAlbums filteredAlbums={filteredAlbums} />
    </>
  );
}

export default Spotify;
