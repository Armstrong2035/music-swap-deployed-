import React, { useState } from "react";
import { useStore } from "../../Store/Store";
import { create } from "@mui/material/styles/createTransitions";
import {
  Box,
  Container,
  Card,
  CardContent,
  Stack,
  Typography,
  Button,
  CardMedia,
  Grid,
  AppBar,
  Toolbar,
  Alert,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import { green } from "@mui/material/colors";

const CreatePlaylist = () => {
  const {
    youTubeAccessToken: accessToken,
    queries,
    steps,
  } = useStore((state) => state);

  const [showAlert, setShowAlert] = useState(false);

  console.log(queries);
  const createPlaylist = async () => {
    setShowAlert(true);
    for (const album of queries) {
      try {
        album.status = false;
        const playlistResponse = await fetch(
          "https://www.googleapis.com/youtube/v3/playlists?part=id,snippet",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken.access_token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              snippet: {
                title: album.title,
                description: "",
                status: {
                  privacyStatus: "public",
                },
              },
            }),
          }
        );

        const playlistData = await playlistResponse.json();
        const newPlaylistId = playlistData.id;

        for (const track of album.tracks) {
          const searchResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=AIzaSyB0I-vMhKJ2jWoTShRAqIZOal_TFfCxayI&q=${track}&type=video&part=snippet`
          );
          const searchData = await searchResponse.json();
          const videoId = searchData.items[0].id.videoId;

          // Add video to playlist
          await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${accessToken.access_token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                snippet: {
                  playlistId: newPlaylistId,
                  resourceId: {
                    kind: "youtube#video",
                    videoId: videoId,
                  },
                },
              }),
            }
          );
        }

        album.status = true;
      } catch (error) {
        console.error("Error creating playlist:", error);
      }
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#011A51",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <AppBar
        position="static"
        sx={{ padding: "20px", backgroundColor: "#0d2a67" }}
      >
        <Toolbar></Toolbar>
      </AppBar>

      <Stepper activeStep={3} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {showAlert && (
        <Alert severity="info" onClose={() => setShowAlert(false)}>
          Your playlists and albums are being created as private YouTube
          playlists. This process typically takes 1-5 minutes. Please check your
          created playlists.
        </Alert>
      )}

      <Box
        sx={{
          padding: "5px 50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {queries.map((query, index) => (
          <Box sx={{ marginTop: "15px", backgroundColor: "#1f3c7e" }}>
            <Stack
              container
              alignItems={"center"}
              justifyContent={"flex-start"}
              direction={"row"}
              spacing={4}
            >
              <img src={query.image} />

              <Typography
                sx={{ color: "#F8F8F8" }}
              >{`${query.title}`}</Typography>
            </Stack>
          </Box>
        ))}

        <Button
          sx={{
            backgroundColor: "#F8F8F8",
            marginTop: "5px",
          }}
          onClick={createPlaylist}
        >
          Complete
        </Button>
      </Box>
    </div>
  );
};

export default CreatePlaylist;
