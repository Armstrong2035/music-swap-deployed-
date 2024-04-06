import React, { useEffect, useState } from "react";
import { useStore } from "../../Store/Store";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import youtubeicon from "../../mediaa/youtubeicon.png";

const GoogleAuth = ({ isYouTubeActive }) => {
  const [client, setClient] = useState(null);
  const { youTubeAccessToken, setYouTubeAccessToken } = useStore(
    (state) => state
  );
  const [color, setColor] = useState(isYouTubeActive ? "#011A51" : "grey");
  const [onClick, setOnClick] = useState(
    isYouTubeActive ? handleAuthClick : null
  );
  const navigate = useNavigate();

  useEffect(() => {
    const loadGoogleIdentityPlatform = () => {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.onload = () => {
        initTokenClient();
      };
      document.body.appendChild(script);
    };

    const initTokenClient = () => {
      const tokenClient = window.google.accounts.oauth2.initTokenClient({
        client_id:
          "639409206129-0jtt27lo6t93agp5k9qnm48t1cqrtg1e.apps.googleusercontent.com",

        redirect_uri: "https://musicswap-gamma.vercel.app/youtube/login",

        scope:
          "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner",
        callback: (response) => {
          console.log(response);
          setYouTubeAccessToken(response);

          if (response) {
            navigate("/youtube/receivequery");
          }
        },
      });
      setClient(tokenClient);
      // console.log(tokenClient);
    };

    if (
      !window.google ||
      !window.google.accounts ||
      !window.google.accounts.oauth2
    ) {
      loadGoogleIdentityPlatform();
    } else {
      initTokenClient();
    }
  }, []);

  const handleAuthClick = () => {
    if (client) {
      client.requestAccessToken();
    }
  };

  // setYouTubeAccessToken(token);
  console.log(youTubeAccessToken);

  // console.log(accessToken);

  return (
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
      onClick={onClick}
    >
      <Stack
        direction={"row"}
        spacing={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <img src={youtubeicon} />

        <Typography
          variant="h4"
          component="p"
          gutterBottom
          sx={{
            color: "000000",
          }}
        >
          YouTube
        </Typography>
      </Stack>
    </Box>
  );
};

export default GoogleAuth;
