import React, { useState, useEffect, useMemo } from "react";
import { useStore } from "../../Store/Store";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Container,
  Typography,
  FormGroup,
  CardContent,
  CardMedia,
  CardActions,
  Checkbox,
  Grid,
  Tab,
  Tabs,
  Box,
  Stack,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Toolbar,
  Fab,
  Step,
  Stepper,
  StepLabel,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function ViewAlbums() {
  const {
    albums,
    playlists,
    playlistsToClone,
    addToPlaylistsToClone,
    removeFromPlaylistsToClone,
    addToAlbumsToClone,
    removeFromAlbumsToClone,
    albumsToClone,
    steps,
  } = useStore((state) => state);

  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  // console.log(albums);

  const handleCheckboxClickAlbums = (album) => {
    if (albumsToClone.includes(album)) {
      // If the album is already in albumsToClone, remove it
      removeFromAlbumsToClone(album);
    } else {
      // If the album is not in albumsToClone, add it
      addToAlbumsToClone(album);
    }
  };

  const handleCheckboxClickPlaylists = (playlist) => {
    if (playlistsToClone.includes(playlist)) {
      removeFromPlaylistsToClone(playlist);
    } else {
      addToPlaylistsToClone(playlist);
    }
  };

  // console.log(albums);

  // console.log(playlists);

  return (
    <>
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

        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box
          sx={{
            padding: "5px 50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            aria-label="Tabs for albums and playlists"
          >
            <Tab label="Albums" sx={{ color: "#F8F8F8" }} />
            <Tab label="Playlists" sx={{ color: "#F8F8F8" }} />
          </Tabs>

          {currentTab === 0 && (
            <>
              <FormGroup>
                {albums.map((album, idx) => (
                  <Box sx={{ marginTop: "15px", backgroundColor: "#1f3c7e" }}>
                    <Stack
                      container
                      alignItems={"center"}
                      justifyContent={"flex-start"}
                      direction={"row"}
                      spacing={4}
                    >
                      <img
                        src={album.image}
                        alt={`${album.name} by ${album.artist}`}
                      />

                      <Typography sx={{ color: "#F8F8F8" }}>
                        {album.name} {album.artist}
                      </Typography>

                      <Checkbox
                        id={`album-${idx}`}
                        name="album"
                        value={album}
                        checked={albumsToClone.includes(album)}
                        onChange={() => handleCheckboxClickAlbums(album)}
                        size={"large"}
                        sx={{ color: "#F8F8F8" }}
                      />
                    </Stack>
                  </Box>
                ))}
              </FormGroup>
            </>
          )}

          {currentTab === 1 && (
            <>
              <FormGroup sx={{ height: "100%" }}>
                {playlists.map((playlist, idx) => (
                  <Box sx={{ backgroundColor: "#1f3c7e", marginTop: "15px" }}>
                    <Accordion sx={{ backgroundColor: "#1f3c7e" }}>
                      <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Stack
                          container
                          alignItems={"center"}
                          justifyContent={"flex-start"}
                          direction={"row"}
                          spacing={4}
                        >
                          <img src={null} />

                          <Typography sx={{ color: "#F8F8F8" }}>
                            {playlist.name}
                          </Typography>

                          <Checkbox
                            id={`playlist-${idx}`}
                            name="playlist"
                            value={playlist}
                            checked={playlistsToClone.includes(playlist)}
                            onChange={() =>
                              handleCheckboxClickPlaylists(playlist)
                            }
                            size={"large"}
                            sx={{ color: "#F8F8F8" }}
                          />
                        </Stack>
                      </AccordionSummary>

                      <AccordionDetails>
                        {playlist.tracks.map((track) => (
                          <>
                            <Typography sx={{ color: "#F8F8F8" }}>
                              {`${track.name} ${track.artist}`}
                            </Typography>
                          </>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                ))}
              </FormGroup>
            </>
          )}

          <Link to="/transfer">
            <Button
              variant={"contained"}
              sx={{
                backgroundColor: "#F8F8F8",
                marginTop: "5px",
                color: "black",
              }}
            >
              Next
            </Button>
          </Link>
        </Box>
      </div>
    </>
  );
}
