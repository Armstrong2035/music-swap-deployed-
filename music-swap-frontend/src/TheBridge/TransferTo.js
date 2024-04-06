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
  AppBar,
  Toolbar,
} from "@mui/material";
import SpotifyAuthentication from "../Spotify/Authentication/SpotifyAuthentication";
import AppleMusicAuthentication from "../AppleMusic/AppleMusicAuthentication";
import GoogleAuth from "../YouTube/Authentication/GoogleAuth";
import StepperComponent from "../StepperComponent";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#011A51" }}>
      <AppBar
        position="static"
        sx={{ padding: "20px", backgroundColor: "#0d2a67" }}
      >
        <Toolbar></Toolbar>
      </AppBar>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "center",
          height: "100vh",
          padding: "30px",
        }}
      >
        <Typography variant="h4" poppins sx={{ color: "#F8F8F8" }}>
          Transfer Music To
        </Typography>
        <Grid
          container
          spacing={3}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ padding: 5 }}
        >
          <Grid item>
            <GoogleAuth />
          </Grid>
          <Grid item>
            <SpotifyAuthentication />
          </Grid>

          <Grid item>
            <AppleMusicAuthentication />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
