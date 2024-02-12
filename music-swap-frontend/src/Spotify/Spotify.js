import React, { useState } from "react";
import SpotifyAuthentication from "./Authentication/SpotifyAuthentication";
import ExtractAlbums from "./ExtractCollection/ExtractAlbums";

function Spotify() {
  const [accessToken, setAccessToken] = useState(null);
  const [username, setUsername] = useState("");
  const [albums, setAlbums] = useState([]);

  const receiveAccessToken = (token) => {
    setAccessToken(token);
  };
  const receieveUserName = (username) => {
    setUsername(username);
  };

  const receiveAlbums = (albums) => {
    setAlbums(setAlbums);
    console.log(albums);
  };

  return (
    <>
      <SpotifyAuthentication
        receiveAccessToken={receiveAccessToken}
        receiveUserName={receieveUserName}
      />
      <ExtractAlbums accessToken={accessToken} receiveAlbums={receiveAlbums} />
    </>
  );
}

export default Spotify;
