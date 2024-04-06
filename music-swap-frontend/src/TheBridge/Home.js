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
  Box,
} from "@mui/material";
import SpotifyAuthentication from "../Spotify/Authentication/SpotifyAuthentication";
import AppleMusicAuthentication from "../AppleMusic/AppleMusicAuthentication";
import GoogleAuth from "../YouTube/Authentication/GoogleAuth";
import StepperComponent from "../StepperComponent";

export default function Home() {
  const isSpotifyActive = true;
  const isYouTubeActive = false;
  const isAppleMusicActive = false;
  const activeStep = 0;
  return (
    <div style={{ backgroundColor: "#fffff", height: "100vh" }}>
      <Box sx={{ width: "100%" }}>
        <StepperComponent activeStep={activeStep} />
      </Box>

      <Grid
        container
        spacing={3}
        alignItems={"center"}
        justifyContent={"flex-start"}
        sx={{ padding: 5 }}
      >
        <Grid item>
          <SpotifyAuthentication isSpotifyActive={isSpotifyActive} />
        </Grid>
        <Grid item>
          <GoogleAuth isYouTubeActive={isYouTubeActive} />
        </Grid>
        <Grid item>
          <AppleMusicAuthentication />
        </Grid>
      </Grid>
    </div>
  );
}
