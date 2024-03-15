import React from "react";
import Spotify from "../Spotify/Spotify";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button/Button";
import {
  Container,
  Paper,
  Grid,
  Typography,
  Card,
  CardContent,
  Stack,
} from "@mui/material";

import SpotifyAuthentication from "../Spotify/Authentication/SpotifyAuthentication";
import GoogleAuth from "../YouTube/Authentication/GoogleAuth";
import AppleMusicAuthentication from "../AppleMusic/AppleMusicAuthentication";

export default function TransferTo() {
  const isSpotifyActive = false;
  const isYouTubeActive = true;
  const isAppleMusicActive = false;
  return (
    <Container maxWidth={"xl"}>
      <Grid
        container
        spacing={3}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <GoogleAuth isYouTubeActive={isYouTubeActive} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <SpotifyAuthentication isSpotifyActive={isSpotifyActive} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <AppleMusicAuthentication />
        </Grid>
      </Grid>
    </Container>
  );
}
