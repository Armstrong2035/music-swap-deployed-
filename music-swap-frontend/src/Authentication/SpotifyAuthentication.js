import { getTokenFromUrl, spotifyLogin } from "./spotifyCredentials";
import SpotifyWebApi from "spotify-web-api-js";
import React, { useEffect, useMemo, useState } from "react";

const spotify = new SpotifyWebApi();
export default function GenerateAccessToken() {
  const [token, setToken] = useState("");
  const spotifyLoginUrl = useMemo(() => spotifyLogin(), []);
  useEffect(() => {
    console.log(spotifyLoginUrl);
    const hash = window.location.hash;
    let storedToken = window.localStorage.getItem("token");
    console.log(hash);

    if (hash) {
      const urlToken = getTokenFromUrl();
      console.log(`here's the token ${urlToken.access_token}`);
      if (urlToken.access_token) {
        window.location.hash = "";
        window.localStorage.setItem("token", urlToken.access_token);
        spotify.setAccessToken(urlToken.access_token);
        spotify.getMe().then((user) => {
          console.log(`The user is ${user.display_name}`);
        });
        setToken(urlToken.access_token);
      }
    } else if (storedToken) {
      setToken(storedToken);
      spotify.setAccessToken(storedToken);
    }

    console.log(token);
  }, []);

  const handleLoginClick = () => {
    window.location.href = spotifyLogin(); // Redirect to Spotify login URL
  };

  return (
    <div>
      <button onClick={handleLoginClick}>Login to Spotify</button>
    </div>
  );
}