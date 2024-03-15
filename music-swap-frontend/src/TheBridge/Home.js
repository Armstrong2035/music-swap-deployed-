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
import AppleMusicAuthentication from "../AppleMusic/AppleMusicAuthentication";
import GoogleAuth from "../YouTube/Authentication/GoogleAuth";

export default function Home() {
  const isSpotifyActive = true;
  const isYouTubeActive = false;
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
          <SpotifyAuthentication isSpotifyActive={isSpotifyActive} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <GoogleAuth isYouTubeActive={isYouTubeActive} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <AppleMusicAuthentication />
        </Grid>
      </Grid>
    </Container>
  );
}

// const platformsarray = [
//   {
//     title: "Spotify",
//     active: true,

//     link: "/spotify/login",
//     logo: spotifyicon,
//     component: <SpotifyAuthentication />,
//   },
//   {
//     title: "Apple Music",
//     active: false,
//     link: "/applemusic",
//     logo: applemusicicon,
//   },
//   {
//     title: "Youtube Music",
//     active: true,
//     link: "/youtubemusic",
//     logo: youtubeicon,
//   },
// ];

/*<Grid item xs={12} md={12} l={12}>
          <Typography
            variant="h4"
            component="h4"
            gutterBottom
            sx={{
              color: "black",
            }}
          >
            Transfer your music from:
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack spacing={5}>
            {platformsarray.map((platform, index) => (
              // <Link
              //   to={platform.link}
              //   key={index}
              //   style={{ textDecoration: "none" }}
              // >
              <Card
                variant="outlined"
                sx={{
                  backgroundColor: "#011A51",
                  color: "black",
                  maxwidth: 300,
                }}
                raised={true}
              >
                <CardContent>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={2}
                    justifyContent={"center"}
                  >
                    <img src={platform.logo} alt={platform.title} />

                    <Typography
                      variant="h4"
                      component="h4"
                      gutterBottom
                      sx={{
                        color: "white",
                      }}
                    >
                      {platform.title}
                    </Typography>
                  </Stack>
                  <Stack sm={4} md={4} lg={6}>
                    {platform.component}
                  </Stack>
                </CardContent>
              </Card>
              // </Link>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        */
