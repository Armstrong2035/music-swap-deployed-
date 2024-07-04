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
  Box,
} from "@mui/material";
import spotifyicon from "../../mediaa/spotifyicon.png";

const spotify = new SpotifyWebApi();
export default function SpotifyAuthentication({ isSpotifyActive }) {
  const [color, setColor] = useState(isSpotifyActive ? "#011A51" : "#E0E0E0");
  const [token, setToken] = useState("");
  const [displayName, setDisplayName] = useState("");

  console.log("SpotifyAuthentication component rendering");
  const navigate = useNavigate();

  const { setAccessToken } = useStore((state) => state);

  const spotifyLoginUrl = useMemo(() => spotifyLogin(), []);

  useEffect(() => {
    console.log("Authentication effect running");
    const hash = window.location.hash;
    let storedToken = window.localStorage.getItem("token");

    if (hash) {
      console.log("Hash found:", hash);
      const urlToken = getTokenFromUrl();
      if (urlToken.access_token) {
        console.log("Access token found in URL");
        // ... (rest of the code)
        console.log("Attempting to navigate to /spotify/extractalbums");
        navigate("/spotify/extractalbums");
      }
    } else if (storedToken) {
      console.log("Stored token found");
      // ... (rest of the code)
      console.log("Attempting to navigate to /spotify/extractalbums");
      navigate("/spotify/extractalbums");
    }
  }, [navigate, setAccessToken]);

  const handleLoginClick = () => {
    window.location.href = spotifyLogin(); // Redirect to Spotify login URL
  };

  return (
    <Button>
      <Box
        variant="outlined"
        sx={{
          backgroundColor: "#F5F5F5",
          color: "black",
          width: "300px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={handleLoginClick}
      >
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img src={spotifyicon} />

          <Typography
            variant="h4"
            component="p"
            gutterBottom
            sx={{
              color: "#000000",
            }}
          >
            Spotify
          </Typography>
        </Stack>
      </Box>
    </Button>
  );
}
