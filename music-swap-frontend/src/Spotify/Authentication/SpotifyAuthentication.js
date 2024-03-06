import { getTokenFromUrl, spotifyLogin } from "./spotifyCredentials";
import SpotifyWebApi from "spotify-web-api-js";
import React, { useEffect, useMemo, useState } from "react";
import { useStore } from "../../Store/Store";
import { Link, useNavigate } from "react-router-dom";
import ExtractAlbums from "../ExtractCollection/ExtractAlbums";

const spotify = new SpotifyWebApi();
export default function SpotifyAuthentication() {
  const [token, setToken] = useState("");
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();

  const { setAccessToken } = useStore((state) => state);

  const spotifyLoginUrl = useMemo(() => spotifyLogin(), []);

  useEffect(() => {
    // console.log(spotifyLoginUrl);
    const hash = window.location.hash;
    let storedToken = window.localStorage.getItem("token");
    // console.log(hash);

    if (hash) {
      const urlToken = getTokenFromUrl();
      // console.log(`here's the token ${urlToken.access_token}`);
      if (urlToken.access_token) {
        window.location.hash = "";
        window.localStorage.setItem("token", urlToken.access_token);
        spotify.setAccessToken(urlToken.access_token);
        // spotify.getMe().then((user) => {
        //   receiveUserName(user.display_name);
        //    console.log(`The user is ${user.display_name}`);
        // });
        // receiveAccessToken(urlToken.access_token);
        console.log(urlToken.access_token);
        setAccessToken(urlToken.access_token);
        if (urlToken.access_token) {
          navigate("/spotify/extractalbums");
        }
      }
    } else if (storedToken) {
      setToken(storedToken);
      spotify.setAccessToken(storedToken);
    }
  }, []);

  const handleLoginClick = () => {
    window.location.href = spotifyLogin(); // Redirect to Spotify login URL
  };

  return (
    <div>
      <button onClick={handleLoginClick}>Login to Spotify</button>
      {/* <Link to="/spotify/extractalbums"> Extract Albums </Link> */}
    </div>
  );
}
