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
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function ViewAlbums({ selectAlbum }) {
  const {
    albums,
    playlists,
    playlistsToClone,
    addToPlaylistsToClone,
    removeFromPlaylistsToClone,
    addToAlbumsToClone,
    removeFromAlbumsToClone,
    albumsToClone,
  } = useStore((state) => state);

  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  console.log(albums);

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

  console.log(albums);

  console.log(albumsToClone);

  return (
    <>
      <Box sx={{ padding: "10px" }}>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          aria-label="Tabs for albums and playlists"
        >
          <Tab label="Albums" />
          <Tab label="Playlists" />
        </Tabs>

        {currentTab === 0 && (
          <>
            <Typography variant="h4" component="h4" gutterBottom>
              Albums to Clone
            </Typography>
            <FormGroup>
              {albums.map((album, idx) => (
                <Box>
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

                    <Typography>
                      {album.name} {album.artist}
                    </Typography>

                    <Checkbox
                      id={`album-${idx}`}
                      name="album"
                      value={album}
                      checked={albumsToClone.includes(album)}
                      onChange={() => handleCheckboxClickAlbums(album)}
                      defaultColor={"success"}
                      size={"large"}
                    />
                  </Stack>
                </Box>
              ))}
            </FormGroup>
          </>
        )}

        {currentTab === 1 && (
          <>
            <Typography variant="h4" component="h4" gutterBottom>
              playlists To Clone
            </Typography>
            <FormGroup>
              {playlists.map((playlist, idx) => (
                <Box>
                  <Accordion>
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

                        <Typography>{playlist.name}</Typography>

                        <Checkbox
                          id={`playlist-${idx}`}
                          name="playlist"
                          value={playlist}
                          checked={playlistsToClone.includes(playlist)}
                          onChange={() =>
                            handleCheckboxClickPlaylists(playlist)
                          }
                          defaultColor={"success"}
                          size={"large"}
                        />
                      </Stack>
                    </AccordionSummary>

                    <AccordionDetails>
                      {playlist.tracks.map((track) => (
                        <>
                          <Stack>
                            <Typography>
                              {`${track.name} ${track.artist}`}
                            </Typography>
                          </Stack>
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
          <Button variant={"contained"} sx={{ backgroundColor: "#011A51" }}>
            Next
          </Button>
        </Link>
      </Box>
    </>
  );
}
