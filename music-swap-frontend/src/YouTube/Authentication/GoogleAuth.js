import React, { useEffect, useState } from "react";
import { useStore } from "../../Store/Store";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Stack } from "@mui/material";
import youtubeicon from "../../mediaa/youtubeicon.png";

const GoogleAuth = ({ isYouTubeActive }) => {
  const [client, setClient] = useState(null);
  const { youTubeAccessToken, setYouTubeAccessToken } = useStore(
    (state) => state
  );
  const [color, setColor] = useState(isYouTubeActive ? "#011A51" : "grey");
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
          "546085219636-h1p4fv5god85oqf0vcihj64d20t05bao.apps.googleusercontent.com",
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
    <Card
      variant="outlined"
      sx={{
        backgroundColor: color,
        color: "black",
        maxwidth: 300,
      }}
      raised={true}
      onClick={handleAuthClick}
    >
      <CardContent>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CardMedia>
            <img src={youtubeicon} />
          </CardMedia>
          <Typography
            variant="h4"
            component="p"
            gutterBottom
            sx={{
              color: "white",
            }}
          >
            YouTube
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default GoogleAuth;
