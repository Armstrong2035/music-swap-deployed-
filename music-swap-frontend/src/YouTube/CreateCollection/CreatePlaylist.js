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
} from "@mui/material";
import PlaylistAddCheckCircleRoundedIcon from "@mui/icons-material/PlaylistAddCheckCircleRounded";

const CreatePlaylist = () => {
  const { youTubeAccessToken: accessToken, queries } = useStore(
    (state) => state
  );

  console.log(accessToken);

  const createPlaylist = async () => {
    for (const album of queries) {
      try {
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
      } catch (error) {
        console.error("Error creating playlist:", error);
      }
    }
  };

  for (const i of queries) {
    console.log(i);
  }

  return (
    <Container>
      {queries.map((query, index) => (
        <Card key={index}>
          <Grid
            container
            direction={"column"}
            justifyItems={"center"}
            spacing={5}
          >
            <Grid item xs={12} sm={12} md={4} lg={6}>
              <CardContent>
                <Grid container spacing={5}>
                  <Grid item>
                    <CardMedia>
                      <img src={query.image} />
                    </CardMedia>
                  </Grid>
                  <Grid item>
                    <Typography>{`${query.title}`}</Typography>
                  </Grid>
                  <Grid item>
                    <PlaylistAddCheckCircleRoundedIcon />
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      ))}

      <Button
        sx={{
          backgroundColor: "#011A51",
          color: "white",
          maxwidth: 300,
        }}
        onClick={createPlaylist}
      >
        Clone your playlists
      </Button>
    </Container>
  );
};

export default CreatePlaylist;
