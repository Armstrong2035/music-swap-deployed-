import { getTokenFromUrl, spotifyLogin } from "./spotifyCredentials";
import SpotifyWebApi from "spotify-web-api-js";
import React, { useEffect, useMemo, useState } from "react";
import { useStore } from "../../Store/Store";
import { Link, useNavigate } from "react-router-dom";
import ExtractAlbums from "../ExtractCollection/ExtractAlbums";
import {
  Container,
  Button,
  Typography,
  Grid,
  Modal,
  ButtonBase,
  CardMedia,
  Card,
  Stack,
  CardContent,
} from "@mui/material";
import spotifyicon from "../../mediaa/spotifyicon.png";

const spotify = new SpotifyWebApi();
export default function SpotifyAuthentication({ isSpotifyActive }) {
  const [color, setColor] = useState(isSpotifyActive ? "#011A51" : "#E0E0E0");
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
    <Card
      variant="outlined"
      sx={{
        backgroundColor: color,
        color: "black",
        maxwidth: 300,
      }}
      raised={true}
      onClick={handleLoginClick}
    >
      <CardContent>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CardMedia>
            <img src={spotifyicon} />
          </CardMedia>
          <Typography
            variant="h4"
            component="p"
            gutterBottom
            sx={{
              color: "white",
            }}
          >
            Spotify
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
